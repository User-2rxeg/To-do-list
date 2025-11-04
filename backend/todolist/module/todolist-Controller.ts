import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, ForbiddenException, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todolist-Service';
import { CreateTodoDto, UpdateTodoDto, TodoIdParamDto } from '../dto/todo-dto';
import { CurrentUser } from '../../Authentication/Decorators/Current-User';
import { JwtPayload } from '../../Authentication/Interfaces/JWT-Payload';
import { UserRole } from '../../User/Model/User';
import { Types } from 'mongoose';

@Controller('todos')
export class TodoController {
    constructor(private readonly service: TodoService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async create(@Body() dto: CreateTodoDto, @CurrentUser() user: JwtPayload) {
        const owner = new Types.ObjectId(user.sub);
        const created = await this.service.create({ title: dto.title, done: dto.done ?? false, owner });
        return created;
    }

    @Get()
    async list(@CurrentUser() user: JwtPayload) {
        if (user.role === UserRole.ADMIN) {
            return this.service.findAll();
        }
        return this.service.findAllByOwner(new Types.ObjectId(user.sub));
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async update(
        @Param() params: TodoIdParamDto,
        @Body() dto: UpdateTodoDto,
        @CurrentUser() user: JwtPayload,
    ) {
        const { id } = params;
        const isOwner = await this.service.isOwner(id, user.sub);
        const isAdmin = user.role === UserRole.ADMIN;
        if (!isOwner && !isAdmin) throw new ForbiddenException('Forbidden');
        return this.service.updateById(id, dto);
    }

    @Delete(':id')
    async remove(
        @Param() params: TodoIdParamDto,
        @CurrentUser() user: JwtPayload,
    ) {
        const { id } = params;
        const isOwner = await this.service.isOwner(id, user.sub);
        const isAdmin = user.role === UserRole.ADMIN;
        if (!isOwner && !isAdmin) throw new ForbiddenException('Forbidden');
        return this.service.deleteById(id);
    }
}


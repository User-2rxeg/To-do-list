import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../model/todolist';
import { TodoService } from './todolist-Service';
import { TodoController } from './todolist-Controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Todo.name, schema: TodoSchema },
        ]),
    ],
    providers: [TodoService],
    controllers: [TodoController],
    exports: [TodoService],
})
export class TodoModule {}


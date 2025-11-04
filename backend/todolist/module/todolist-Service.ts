import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Todo } from '../model/todolist';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
    ) {}

    async create(data: { title: string; done?: boolean; owner: Types.ObjectId }) {
        const doc = await this.todoModel.create(data);
        return doc.toObject();
    }

    async findAll(): Promise<any[]> {
        return this.todoModel.find().lean();
    }

    async findAllByOwner(ownerId: Types.ObjectId): Promise<any[]> {
        return this.todoModel.find({ owner: ownerId }).lean();
    }

    async findById(id: string) {
        const doc = await this.todoModel.findById(id).lean();
        if (!doc) throw new NotFoundException('Todo not found');
        return doc;
    }

    async updateById(id: string, update: Partial<{ title: string; done: boolean }>) {
        const doc = await this.todoModel.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true, runValidators: true }
        ).lean();
        if (!doc) throw new NotFoundException('Todo not found');
        return doc;
    }

    async deleteById(id: string) {
        const res = await this.todoModel.findByIdAndDelete(id).lean();
        if (!res) throw new NotFoundException('Todo not found');
        return { deleted: true };
    }

    async isOwner(todoId: string, userId: string): Promise<boolean> {
        if (!Types.ObjectId.isValid(todoId) || !Types.ObjectId.isValid(userId)) return false;
        const found = await this.todoModel.exists({ _id: todoId, owner: new Types.ObjectId(userId) });
        return !!found;
    }
}


import {HydratedDocument, Types} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { User } from "../../User/Model/User";

export type TodoDocument = HydratedDocument<Todo>

@Schema({ timestamps: true })
export class Todo {

    @Prop({ required: true, trim: true })
    title!: string;

    @Prop({ default: false })
    done!: boolean;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    owner!: Types.ObjectId;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
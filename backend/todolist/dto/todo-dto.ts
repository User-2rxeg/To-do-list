import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}

export class UpdateTodoDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}

export class TodoIdParamDto {
    @IsMongoId()
    id!: string;
}


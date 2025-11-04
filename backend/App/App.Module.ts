import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from '../User/Module/User-Module';
import {AuthModule} from "../Authentication/Module/Authentication-Module";
import {AuditLogModule} from "../Audit-Log/Module/Audit-Log.Module";

import {RolesGuard} from "../Authentication/Guards/Roles-Guard";
import {JwtAuthGuard} from "../Authentication/Guards/Authentication-Guard";
import { TodoModule } from '../todolist/module/todolist-Module';


@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ScheduleModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (config: ConfigService) => ({
                uri: config.get<string>('MONGODB_URI'),
            }),
            inject: [ConfigService],
        }),
        AuditLogModule,

        AuthModule,

        UserModule,



       TodoModule,

    ],
    providers: [
        { provide: APP_GUARD, useClass: JwtAuthGuard },
        { provide: APP_GUARD, useClass: RolesGuard },
    ],
})
export class AppModule {}
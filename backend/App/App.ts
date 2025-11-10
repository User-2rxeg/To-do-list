import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './App.Module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors({
        origin: ['http://localhost:3999', 'http://localhost:3000', 'http://localhost:5000'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));


     const config = new DocumentBuilder()

        .setTitle('HR / E-Learning API')

        .setDescription('API documentation — limited to safe public models (no secrets).')

        .setVersion('1.0')

        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                in: 'header',
            },
            'access-token',
        )
        .build();

    const document = SwaggerModule.createDocument(app, config, {});

    SwaggerModule.setup('api', app, document);

     const port = Number(process.env.PORT) || 5000;

    await app.listen(port);

    console.log(`Application running on http://localhost:${port}`);

    console.log(`Swagger running on http://localhost:${port}/api`);
}
bootstrap()



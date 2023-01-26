import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Api Gateway Bienestar')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Bienestar')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();

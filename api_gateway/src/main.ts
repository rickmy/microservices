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
    .setTitle('Api Gateway Bienestar Estudiantil')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Bienestar Estudiantil Yavirac')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(5000);
}
bootstrap();

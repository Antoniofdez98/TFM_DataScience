import { writeFileSync } from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

async function generate() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const config = new DocumentBuilder()
    .setTitle('MyApp API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const outputPath = join(__dirname, '..', 'openapi', 'openapi.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2));
  await app.close();
}

generate();

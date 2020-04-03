import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('hudex-backend')
  .setDescription('This is a API description')
  .setVersion('2.0')
  .addTag('exchage')
  .build()

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000);

}
bootstrap();

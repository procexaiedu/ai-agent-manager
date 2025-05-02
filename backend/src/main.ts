import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add global API prefix
  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT || 3001); // Use PORT from .env or default to 3001
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  await app.listen(3000);
}
bootstrap();



//40:00 video to understand the flow
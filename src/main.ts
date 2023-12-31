import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session')

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['asdfasdf']
  }));
  /*
    * whitelist = true means no other property allow to come in with
    * the body of API. it will remove extra properties.
    * Note: Concern related to security perspective
  */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();

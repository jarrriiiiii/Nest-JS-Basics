import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //Session code - Which will check allow user to access other APIS after being logged in
      //When a session is created, it comes back to the user in form of COOKIES
      //When a user logs in, it will get a cookie through SESSION, which allow the user to access other APIs within limited time frame
      //This whole mechanism will be implemented to the API via Guard
  app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 3600000} //Time in milisecond after the cookie gets expired
      }))

  app.use(passport.initialize());
  app.use(passport.session());

  
  await app.listen(3000);
}
bootstrap();


//Create APIs in AppController
//Create User Modules to hard code the users in the UserService
//Create the AuthModule and AuthService



//40:00 video to understand the flow
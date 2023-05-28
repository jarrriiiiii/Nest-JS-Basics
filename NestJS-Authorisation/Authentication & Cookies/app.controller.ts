import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';


//API where Auth will be applied
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @UseGuards(LocalAuthGuard) //Applying the guards here
  @Post('login')
  login(): string {
    return `Login API hit!`
  }


  @UseGuards(AuthenticatedGuard) //Applying the guards here
  @Get('protected')
  protectedApi(@Request() req): string{
   
    // return req.user;
    return `Protected API Hit!`
  }

  
}

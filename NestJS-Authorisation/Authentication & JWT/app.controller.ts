import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';


//API where Auth will be applied
@Controller()
export class AppController {


  //Associating AuthService here because we need to access the JWT Token
  constructor(private readonly authService: AuthService) {}



  //JWT TOKEN Will be generated when this API will be hit
  @UseGuards(LocalAuthGuard) //Applying the guards here to check for the correct ID and Password
  @Post('login')
  login(@Request() req): any { //Request 'req' is the body which is sent by the client

    //This code will send the complete USER OBJECT in the Token Generator Function inside the AuthService which will generate the token
    return this.authService.login(req)
  }

  //This API will require JWT Token that was generated above in order to get hit
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  protectedApi(@Request() req): string{
    return `Protected API Hit!`
  }


  
}

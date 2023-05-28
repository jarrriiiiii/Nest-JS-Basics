import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/guards';


@Controller('auth')
export class AuthController {


//Loggin Method 
@Get('google/login') 
//Applying the guard
@UseGuards(GoogleAuthGuard) //The function which we made in the 'Guards.ts' file is implemented.
handleLogin() {
return {msg: 'Google Authentication'};
}

//Redirect Method
@Get('google/redirect')
//Applying the guard
@UseGuards(GoogleAuthGuard) //The function which we made in the 'Guards.ts' file is implemented.
handleRedirect() {
    return {msg: 'ok'};
}}

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

//Bringing the hard-coded users here - FROM USER SERVICES && Importing JwtServices!
constructor (
    private userService : UsersService, private jwtService: JwtService
) {}


async validateUser(username: string, password: number) : Promise <any> {
const user = await this.userService.findOne(username);

if ( user && user.password === password){
return user;
}

return null; //If no user found!

}



//Token Generator Code - It will be coded here inside the AuthService
async login (user:any){
    //Payload is a variable which will contain the user's complete or partial information we will give to the token generator
    const payload = {name: user.name, sub: user.id}

    return {
            access_token: this.jwtService.sign(payload), //This will generate the JWT Token
    };
}
}

//Import the JwtModule in the AuthModule
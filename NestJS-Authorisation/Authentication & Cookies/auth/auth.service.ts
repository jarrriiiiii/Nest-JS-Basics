import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

//Bringing the hard-coded users here - FROM USER SERVICES
constructor (
    private userService : UsersService
) {}


async validateUser(username: string, password: number) : Promise <any> {
const user = await this.userService.findOne(username);

if ( user && user.password === password){
return user;
}

return null; //If no user found!

}
}

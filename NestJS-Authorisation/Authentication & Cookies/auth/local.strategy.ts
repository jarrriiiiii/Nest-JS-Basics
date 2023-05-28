//It contains the strategies that we use to authenticate via PASSPORT

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    //Bringing the Auth Service here
    constructor(private authService : AuthService){
        super(); //Here we code the strategy file inside curly brackets from PASSPORT OFFICIAL WEBSITE
    }

    //Function to validate the password
    async validate (username: string, password: number): Promise<any>{
        const user = this.authService.validateUser(username, password);

        if (!user){
            throw new UnauthorizedException();
        }

        return user; //This user will be passed to Session Serializer
    }
}
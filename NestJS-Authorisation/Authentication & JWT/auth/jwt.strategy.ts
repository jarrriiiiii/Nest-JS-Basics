import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //this will extract the existing JWT Token
            ignoreExpiration: false,
            secretOrKey: 'SECRET',
        })
    }

    //existing JWT TOKEN will then be validated in the below function and will be returned
    async validate (payload: any){

        return {
            id: payload.sub,
            name: payload.name,
        };


    }
}
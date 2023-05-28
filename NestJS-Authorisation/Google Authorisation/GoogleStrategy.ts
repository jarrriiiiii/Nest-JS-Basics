import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20"; //Strategy is passed as an argument below in 'PassportStrategy'


@Injectable()
export class googleStrategy extends PassportStrategy(Strategy) {

constructor() {
//All the google related data will be implemented in a SuperClass in a Constructor
super({
    clientID: '864744520297-efgoerlbe9m07f2ldms056qvmqtekknb.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'https://localhost:3001/api/auth/google/redirect',
    scope: ['profile','email'],
});
}

//This method will now do the validation
//This is async because it will be invoked ONLY when the above phase is passed
 async validate (accessToken : string, refreshToken: string, profile : Profile) { //It will have 3 important parameter

    //Since we have no DB connected, we will just print the following details
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}

}                                                
 

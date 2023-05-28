import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate{

    //This function will check if the user's login session is still going on
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();// Here this isAuth function will look for the cookie, if you have got from previous api
    }
}

//Apply the guard on the API 

//We want the user to login and then maintain the session so that user can hit on other APIs
//After partocular time, when session expires, the user shouldnt be able to hit the other APIs
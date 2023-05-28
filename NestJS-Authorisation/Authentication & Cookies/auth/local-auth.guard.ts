import { ExecutionContext, Req } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import { request } from "http";
import { Observable } from "rxjs";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

    //Following code is neccesary to tell the guard to initiate the loggin process

    async canActivate(context: ExecutionContext){
        const result = (await super.canActivate(context)) as boolean;
        const Request = context.switchToHttp().getRequest();

        await super.logIn(Request);
        return result;
    }

    
}


//Apply the guard on the API 
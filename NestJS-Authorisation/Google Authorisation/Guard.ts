//Guard is used to implement the 'Strategy' to the 'Controller' file.
//It acts as a middleware

import { ExecutionContext } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleAuthGuard extends AuthGuard ('google') {
    
//No need to know the working below.
    async canActivate (context: ExecutionContext) {
        const activate = (await super.canActivate(context)) as boolean
        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return activate;
    }
}

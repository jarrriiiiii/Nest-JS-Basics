import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";


//Below are the function that stores the USER details in the session.
@Injectable()
export class SessionSerializer extends PassportSerializer
 {


    //User is coming from the local strategy
    serializeUser(user: any, done: (err: Error, user:any)=> void) : any {
        done(null, user)        
    }

    deserializeUser(payload: any, done: (err: Error, payload: string) => void):any {
        done(null, payload)
    }
}


// Each session is a temporary time period which will give the logged-in user the permission to hit on other APIs
// Each session will need to store the details of the USER
// Its our choice to store either the complete detail of USER or just limited infos
// Currently we are storing complete detail of the 'User'
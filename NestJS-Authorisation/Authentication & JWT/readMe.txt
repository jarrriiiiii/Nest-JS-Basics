Project Structure: 
We have made 2 new modules {UserModule and AuthModule}
UserModule just have the hard coded users inside its services
AuthModule has all the auth related services and strategies


Concept of JWT: There are 2 APIs. Login API and Protected API. When user will loggin from the LoginApi, then a JWT Token will be generated. This Token/ID Card will allow the user to hit other PROTECTEDAPI. 


CREATING THE JWT TOKEN
-First user will hit the LOGIN API with username and password
-The LocalAuthGuard will intercept it and will check it according the 'local' strategy
-The local strategy has a simple function named 'validate' which will take USERNAME and PASSWORD as an argument and will pass this to another function named 'validateUser' that is located inside the AuthService.
-Now the function 'validateUser'will take the USERNAME and PASSWORD and will hit the another function 'findOne' that is situated inside the UserService.
-Now the USERNAME and PASSWORD will be sent as an argument to the function 'findOne' which will look just look for the same username, if any user is matched, it will then return back the user to 'validateUser' in authService.
-Now 'validateUser' in the authService will verify that is the password also matching? or not?

-If no, then this 'validateUser' will return NULL which will then be returned to LOCALSTRATEGY which as a result will throw an unauthorisedException and as a result Guard will not allow the user to hit the API

-If yes, then this 'validateUser' will return USER which will then be returned to LOCALSTRATEGY and then the guard will allow the user to hit the API

-Once the API will be hit, within the API, we will send the USER detail in form of @request req to the function 'login' which is present in the authService
-This 'login' function will simply return a JWT Token


USING THE JWT TOKEN
-Basic idea is to require a JWT TOKEN (or an ID CARD) before the user can hit any other API
-We will make a jwt.Strategy.ts file which will first extract the already generated JWT TOKEN and then it will then validate it through a function named 'validate' and in the end JWT TOKEN will be returned
-Now we have to place a guard on the Protected API which will simply ask for the JWT TOKEN (or ID CARD)
-We will make a guard file 'jwt-auth.guard.ts'
-Make sure to attach the 'jwt strategy' as a provider in the authModule
-Finally place the guard on the Protected API

Concept of JWT: There are 2 APIs. Login API and Protected API. When user will loggin from the LoginApi, then a SESSION COOKIES will be generated. This SESSION COOKIE will allow the user to hit other PROTECTEDAPI. 


CREATING THE SESSION/COOKIES
-First user will hit the LOGIN API with username and password
-The LocalAuthGuard will intercept it and will check it according the 'local' strategy
-The local strategy has a simple function named 'validate' which will take USERNAME and PASSWORD as an argument and will pass this to another function named 'validateUser' that is located inside the AuthService.
-Now the function 'validateUser'will take the USERNAME and PASSWORD and will hit the another function 'findOne' that is situated inside the UserService.
-Now the USERNAME and PASSWORD will be sent as an argument to the function 'findOne' which will look just look for the same username, if any user is matched, it will then return back the user to 'validateUser' in authService.
-Now 'validateUser' in the authService will verify that is the password also matching? or not?

-If no, then this 'validateUser' will return NULL which will then be returned to LOCALSTRATEGY which as a result will throw an unauthorisedException and as a result Guard will not allow the user to hit the API

-If yes, then this 'validateUser' will return USER which will then be returned to LOCALSTRATEGY and USER will be passed on to Session Serializer which will create the new SESSION/COOKIE.
-Each session is a temporary time period which will give the logged-in user the permission to hit on other APIs
-Each session will need to store the details of the USER
-Its our choice to store either the complete detail of USER or just limited infos
-It will keep the user's complete detail but we can also limit the detail
-After this, the API's response will be sent to the user with a COOKIE!


-Now when the user hit another API (Protected API) which is protected then the guard named AuthenticatedGuard will intercept. This guard will just look that whether the user has cookies inside it or not, if yes then the API's response will be sent to the user.
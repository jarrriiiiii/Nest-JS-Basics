// 1.Make a Auth module 
// 2.Make a Auth controller which will contains the API on which the authorisation will be implemented via guard
// 3.Make a guard file which will be applied on the API mentioned in the authController file
// 4.Make a strategy file which will contain all the mechanisms of the authorisations
// 5.Attach the strategy file to the auth module as a provider
// 6.Attach the Auth controller file to the auth module as a controller


Dependencies:
npm install --save @nestjs/passport passport passport-google-oauth20 dotenv
npm install -D @types/passport-google-oauth20

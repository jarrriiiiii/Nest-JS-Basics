// To make a connection to the DB
// -Make a 'typeorm.config.ts' file in the 'config' folder in the 'src' and code the configuration
// -Add this file in the IMPORT array of the app.module.ts
// -DB will be connected
// npm install --save @nestjs/typeorm typeorm pg




//FILE: typeOrmConfig.ts

export const typeOrmConfig: TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'0000',
    database:'jerry',
    entities: [ Auth, StaffProfile, Team, TeamMember,Project],  //Manually add the entities
    synchronize: true,
};



//FILE: app.module.ts
@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig)], //config file
    controllers: [],
    providers: [],
  })
  export class AppModule {}
  


//FILE: user.module.ts

//Import the following code in each module other than the main module


@Module({
  imports: [TypeOrmModule.forFeature([User])], //Entity to be added here
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

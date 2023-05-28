import { Injectable } from '@nestjs/common';

//Creating this as a type checker for hard-coded users below
export type User = {
    id: number;
    name: string;
    username: string;
    password: number;
}


@Injectable()
export class UsersService {


//Hard-coded users below
private readonly users: User [] = [

    {
        id: 1,
        name: 'Jari Abbas',
        username: 'jerri',
        password: 1234,
    },
    {
        id: 2,
        name: 'Sajid Raza',
        username: 'sajju',
        password: 1234,
    },
    {
        id: 3,
        name: 'Hussain Murtaza',
        username: 'hussaini',
        password: 1234,
    },
]

//Function to GET the hardcoded user
async findOne (username: string) : Promise <User | undefined>{
    return this.users.find(user => user.username === username)
}

}

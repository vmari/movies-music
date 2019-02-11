import * as jwt from 'jwt-simple';
import { JsonController, Post, Body, Get, Authorized, CurrentUser } from 'routing-controllers';
import { config } from '../config';
import { User } from '../entity/User';

@JsonController("/user")
export class SecurityController {

    @Post("/login")
    async login(@Body() body: object) {
        return {
            status: true,
            user: {
                id: '5bfec050-4639-4547-b803-3ce856d1cd21',
                name: 'valentin',
                token: jwt.encode({id: '5bfec050-4639-4547-b803-3ce856d1cd21'}, config.jwtSecret)
            }
        };
    }

    @Get("/")
    @Authorized()
    async user(@CurrentUser({required: true}) user: User) {
        return {
            status: true,
            user
        };
    }
}

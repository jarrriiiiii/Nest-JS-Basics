import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { googleStrategy } from './utils/googleStrategy';

@Module({

    imports: [],
    controllers: [AuthController],
    providers: [googleStrategy],
})
export class AuthModule {}

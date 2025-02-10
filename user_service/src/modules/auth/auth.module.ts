import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { AUTH_SERVICE } from './application/ports/in/auth.port-in';
import { AuthServiceImpl } from './application/services/auth.service';
import { UsersModule } from '../users/users.module';
import { BcryptModule } from 'src/shared/bcrypt/bcrypt.module';

@Module({
  imports: [
    UsersModule,
    BcryptModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [{ provide: AUTH_SERVICE, useClass: AuthServiceImpl }],
})
export class AuthModule { }

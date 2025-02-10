import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { AUTH_SERVICE } from './application/ports/in/auth.port-in';
import { AuthServiceImpl } from './application/services/auth.service';

@Module({
  controllers: [AuthController],
  providers: [{ provide: AUTH_SERVICE, useClass: AuthServiceImpl }],
})
export class AuthModule {}

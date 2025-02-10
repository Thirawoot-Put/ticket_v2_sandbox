import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { AuthServiceImpl } from './application/services/auth.service';
//import { UsersModule } from '../users/users.module';

@Module({
  //imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthServiceImpl],
  exports: [AuthServiceImpl],
})
export class AuthModule {}

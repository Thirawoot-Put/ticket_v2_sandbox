import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controllers/users.controller';
import { UsersServiceImpl } from './application/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './domain/models/user.model';
import { UserRepositoryImpl } from './infrastructure/persistence/typeorm/user.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [UsersServiceImpl, UserRepositoryImpl],
})
export class UsersModule {}

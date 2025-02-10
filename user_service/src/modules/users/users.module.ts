import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './domain/models/user.model';
import { UserRepositoryImpl } from './infrastructure/persistence/typeorm/user.repository.impl';
import { UsersServiceImpl } from './application/services/users.service';
import { UsersService } from './application/ports/in/user.port-in';
import { UserRepository } from './application/ports/out/user.port-out';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [
    { provide: UsersService, useClass: UsersServiceImpl },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
  exports: [UsersService],
})
export class UsersModule {}

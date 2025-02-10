import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './domain/models/user.model';
import { UserRepositoryImpl } from './infrastructure/persistence/typeorm/user.repository.impl';
import { UsersService } from './application/ports/in/user.service.interface';
import { UsersServiceImpl } from './application/services/users.service';
import { UserRepository } from './application/ports/out/user.repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [
    { provide: UsersService, useClass: UsersServiceImpl },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
})
export class UsersModule {}

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/modules/users/application/ports/out/user.repository.interface';
import {
  UserCreateEntity,
  UserEntity,
} from 'src/modules/users/domain/entities/user.entity';
import { UserModel } from 'src/modules/users/domain/models/user.model';

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {
    super();
  }

  async create(data: UserCreateEntity): Promise<UserEntity> {
    return this.userRepository.save(data);
  }
}

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  UserCreateEntity,
  UserEntity,
} from 'src/modules/users/domain/entities/user.entity';
import { UserModel } from 'src/modules/users/domain/models/user.model';
import { UserRepository } from 'src/modules/users/application/ports/out/user.port-out';
import { UserReponseDto } from 'src/modules/users/dto/user.dto';

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

  async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async findById(id: number): Promise<UserReponseDto | null> {
    return await this.userRepository.findOne({ where: { id: id } });
  }
}

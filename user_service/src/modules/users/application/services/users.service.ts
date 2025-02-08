import { Injectable } from '@nestjs/common';
import { UserService } from '../ports/in/user.service.interface';
import { UserRepository } from '../ports/out/user.repository.interface';
import { UserCreateDto, UserReponseDto } from '../../dto/user.dto';
import { UserCreateEntity } from '../../domain/entities/user.entity';

@Injectable()
export class UsersService implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: UserCreateDto): Promise<UserReponseDto> {
    const user = new UserCreateEntity();
    user.email = data.email;
    user.password = data.password;
    user.name = data.name ? data.name : null;

    return this.userRepository.create(user);
  }
}

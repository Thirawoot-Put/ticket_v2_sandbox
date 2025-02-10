import { Injectable, NotFoundException } from '@nestjs/common';
import {
  UserCreateDto,
  UserReponseDto,
  UserResponseWithPwd,
} from '../../dto/user.dto';
import { UserCreateEntity } from '../../domain/entities/user.entity';
import { UsersService } from '../ports/in/user.port-in';
import { UserRepository } from '../ports/out/user.port-out';

@Injectable()
export class UsersServiceImpl extends UsersService {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async create(data: UserCreateDto): Promise<UserReponseDto> {
    const user = new UserCreateEntity();
    user.email = data.email;
    user.password = data.password;
    user.name = data.name ? data.name : null;

    const newUser = await this.userRepository.create(user);

    return { id: newUser.id, name: newUser.name, email: newUser.email };
  }

  async findByEmail(email: string): Promise<UserResponseWithPwd> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new NotFoundException('INVALID_EMAIL');

    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { UsersService } from '../ports/in/user.service.interface';
import { UserRepository } from '../ports/out/user.repository.interface';
import { UserCreateDto, UserReponseDto } from '../../dto/user.dto';
import { UserCreateEntity } from '../../domain/entities/user.entity';

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
}

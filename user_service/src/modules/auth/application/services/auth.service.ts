import { Injectable } from '@nestjs/common';
import { AuthService } from '../ports/in/auth.service.interface';
import { UserCreateDto } from 'src/modules/users/dto/user.dto';
import { UsersService } from 'src/modules/users/application/ports/in/user.service.interface';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(data: UserCreateDto) {
    const newUser = this.userService.create(data);
    console.log('sign token here', newUser);
    return { accessToken: 'place token here' };
  }
}

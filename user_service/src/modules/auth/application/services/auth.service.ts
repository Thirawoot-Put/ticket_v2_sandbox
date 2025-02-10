import { Injectable } from '@nestjs/common';
import { AuthService } from '../ports/in/auth.port-in';
import { AuthResponseDto } from '../../dto/auth.dto';
import { UserCreateDto } from 'src/modules/users/dto/user.dto';

@Injectable()
export class AuthServiceImpl implements AuthService {
  async register(data: UserCreateDto): Promise<AuthResponseDto> {
    console.log(data);
    return { accessToken: 'hello token' };
  }
}

import { Injectable } from '@nestjs/common';
import { AuthService } from '../ports/in/auth.port-in';
import { AuthLogin, AuthRegister, AuthResponse } from '../../dto/auth.dto';
import { UsersService } from 'src/modules/users/application/ports/in/user.port-in';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async register(data: AuthRegister): Promise<AuthResponse> {
    const newUser = await this.userService.create(data);
    const payload = { sub: newUser.id, email: newUser.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async login(data: AuthLogin): Promise<AuthResponse> {
    console.log(data);
    // 'find user by user service';

    return { accessToken: 'hello login' };
  }
}

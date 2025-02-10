import { UserCreateDto } from 'src/modules/users/dto/user.dto';

export class AuthRegister extends UserCreateDto { }

export class AuthResponse {
  accessToken: string;
}

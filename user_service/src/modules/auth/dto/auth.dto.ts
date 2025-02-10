import { IsNotEmpty } from 'class-validator';
import { UserBaseDto, UserCreateDto } from 'src/modules/users/dto/user.dto';

export class AuthRegister extends UserCreateDto { }

export class AuthResponse {
  accessToken: string;
}

export class AuthLogin extends UserBaseDto {
  @IsNotEmpty()
  password: string;
}

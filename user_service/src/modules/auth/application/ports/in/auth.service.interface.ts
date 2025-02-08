import { AuthResponseDto } from 'src/modules/auth/dto/auth.dto';
import { UserCreateDto } from 'src/modules/users/dto/user.dto';

export interface AuthService {
  register(data: UserCreateDto): Promise<AuthResponseDto>;
}

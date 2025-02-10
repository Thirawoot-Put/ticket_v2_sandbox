import { AuthResponseDto } from 'src/modules/auth/dto/auth.dto';
import { UserCreateDto } from 'src/modules/users/dto/user.dto';

// Injection Tokens
export const AUTH_SERVICE = Symbol('AUTH_SERVICE');

export interface AuthService {
  register(data: UserCreateDto): Promise<AuthResponseDto>;
}

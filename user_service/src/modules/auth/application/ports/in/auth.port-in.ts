import { AuthResponseDto } from 'src/modules/auth/dto/auth.dto';

export abstract class AuthService {
  abstract register(): Promise<AuthResponseDto>;
}

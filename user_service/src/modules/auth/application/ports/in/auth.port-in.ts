import {
  AuthLogin,
  AuthRegister,
  AuthResponse,
} from 'src/modules/auth/dto/auth.dto';

// Injection Tokens
export const AUTH_SERVICE = Symbol('AUTH_SERVICE');

export interface AuthService {
  register(data: AuthRegister): Promise<AuthResponse>;
  login(data: AuthLogin): Promise<AuthResponse>;
}

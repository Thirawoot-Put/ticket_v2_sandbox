import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('register')
  register(): { accessToken: string } {
    return { accessToken: 'register' };
  }
}

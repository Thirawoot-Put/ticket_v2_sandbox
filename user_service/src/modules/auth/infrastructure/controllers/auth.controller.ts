import { Controller, Post, Inject, Body } from '@nestjs/common';
import {
  AUTH_SERVICE,
  AuthService,
} from '../../application/ports/in/auth.port-in';
import { AuthLogin, AuthRegister } from '../../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: AuthService,
  ) { }

  @Post('register')
  register(@Body() user: AuthRegister) {
    return this.authService.register(user);
  }

  @Post('login')
  login(@Body() data: AuthLogin) {
    return this.authService.login(data);
  }

  //@Get()
  //findAll() {
  //  return this.authService.findAll();
  //}
  //
  //@Get(':id')
  //findOne(@Param('id') id: string) {
  //  return this.authService.findOne(+id);
  //}

  //@Patch(':id')
  //update(@Param('id') id: string, @Body() updateAuthDto: any) {
  //  return this.authService.update(+id, updateAuthDto);
  //}

  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //  return this.authService.remove(+id);
  //}
}

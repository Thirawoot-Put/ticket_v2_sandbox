import { Controller, Post, Inject, Body } from '@nestjs/common';
import {
  AUTH_SERVICE,
  AuthService,
} from '../../application/ports/in/auth.port-in';
import { UserCreateDto } from 'src/modules/users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: AuthService,
  ) {}

  @Post('register')
  create(@Body() user: UserCreateDto) {
    return this.authService.register(user);
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

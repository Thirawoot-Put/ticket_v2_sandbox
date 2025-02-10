import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../../application/ports/in/user.port-in';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) { }

  @Get(':id/profile')
  getProfile(@Param('id') id: string) {
    return this.service.findById(parseInt(id));
  }
}

import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from '../../application/ports/in/user.port-in';
import { JwtAuthGuard } from 'src/modules/auth/infrastructure/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':id/profile')
  getProfile(@Param('id') id: string) {
    return this.service.findById(parseInt(id));
  }
}

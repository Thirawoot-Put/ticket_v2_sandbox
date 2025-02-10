import {
  UserCreateDto,
  UserReponseDto,
  UserResponseWithPwd,
} from 'src/modules/users/dto/user.dto';

// Abstract Classes Instead of Interfaces
export abstract class UsersService {
  abstract create(data: UserCreateDto): Promise<UserReponseDto>;
  abstract findByEmail(email: string): Promise<UserResponseWithPwd>;
}

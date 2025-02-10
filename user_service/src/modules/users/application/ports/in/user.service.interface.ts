import { UserCreateDto, UserReponseDto } from 'src/modules/users/dto/user.dto';

export abstract class UsersService {
  abstract create(data: UserCreateDto): Promise<UserReponseDto>;
}

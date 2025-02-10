import { UserCreateDto, UserReponseDto } from 'src/modules/users/dto/user.dto';

export interface UsersService {
  create(data: UserCreateDto): Promise<UserReponseDto>;
}

import { UserCreateDto, UserReponseDto } from 'src/modules/users/dto/user.dto';

export interface UserService {
  create(data: UserCreateDto): Promise<UserReponseDto>;
}

import { UserReponseDto } from 'src/modules/users/dto/user.dto';
import {
  UserCreateEntity,
  UserEntity,
} from '../../../domain/entities/user.entity';

export abstract class UserRepository {
  abstract create(data: UserCreateEntity): Promise<UserEntity>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract findById(id: number): Promise<UserReponseDto | null>;
}

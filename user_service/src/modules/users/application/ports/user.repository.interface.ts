import {
  UserCreateEntity,
  UserEntity,
} from '../../domain/entities/user.entity';

export interface UserRepository {
  create(data: UserCreateEntity): Promise<UserEntity>;
}

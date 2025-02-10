import {
  UserCreateEntity,
  UserEntity,
} from '../../../domain/entities/user.entity';

export abstract class UserRepository {
  abstract create(data: UserCreateEntity): Promise<UserEntity>;
}

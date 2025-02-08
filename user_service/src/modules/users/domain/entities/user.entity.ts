export class UserCreateEntity {
  name: string | null;
  email: string;
  password: string;
}

export class UserEntity {
  id: number;
  name: string | null;
  email: string;
  password: string;
}

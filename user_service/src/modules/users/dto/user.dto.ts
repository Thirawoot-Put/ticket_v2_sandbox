class UserBaseDto {
  email: string;
  password: string;
}

export class UserCreateDto extends UserBaseDto {
  id: number;
  name?: string;
}

export class UserReponseDto extends UserBaseDto {
  id: number;
  name: string | null;
}

class UserBaseDto {
  email: string;
}

export class UserCreateDto extends UserBaseDto {
  name?: string;
  password: string;
}

export class UserReponseDto extends UserBaseDto {
  id: number;
  name: string | null;
}

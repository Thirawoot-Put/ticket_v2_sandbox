import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserBaseDto {
  @IsEmail()
  email: string;
}

export class UserCreateDto extends UserBaseDto {
  name?: string;

  @IsNotEmpty()
  password: string;
}

export class UserReponseDto extends UserBaseDto {
  id: number;
  name: string | null;
}

export class User {
  email: string;
  password: string;
}

export class UserReturn extends User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

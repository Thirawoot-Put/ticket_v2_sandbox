import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  constructor(private readonly configService: ConfigService) { }

  async hashPwd(pwd: string) {
    return await bcrypt.hash(pwd, this.configService.get<string>('SALT'));
  }

  async checkPwd(pwd: string, hash: string) {
    return await bcrypt.compare(pwd, hash);
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  constructor(private readonly configService: ConfigService) { }

  async hashPwd(pwd: string) {
    const saltOrRound = this.configService.get<string>('SALTORROUND');
    return await bcrypt.hash(pwd, parseInt(saltOrRound));
  }

  async checkPwd(pwd: string, hash: string) {
    return await bcrypt.compare(pwd, hash);
  }
}

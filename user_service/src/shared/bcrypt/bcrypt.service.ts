import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  constructor(private readonly configService: ConfigService) { }

  private async _genSalt() {
    const round = this.configService.get<string>('ROUND');
    return await bcrypt.genSalt(parseInt(round));
  }

  async hashPwd(pwd: string) {
    return await bcrypt.hash(pwd, await this._genSalt());
  }

  async checkPwd(pwd: string, hash: string) {
    return await bcrypt.compare(pwd, hash);
  }
}

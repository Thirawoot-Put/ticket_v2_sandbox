import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV || 'local';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${ENV}.env`,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

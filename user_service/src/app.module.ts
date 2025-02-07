import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import config from './shared/config';

const ENV = process.env.NODE_ENV || 'local';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `../env/.${ENV}.env`,
      load: [config],
    }),
    UsersModule,
    EnvironmentConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

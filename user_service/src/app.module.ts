import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { UsersController } from './modules/users/infrastructure/controllers/users.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersServiceImpl } from './modules/users/application/services/users.service';
//import { AuthServiceImpl } from './modules/auth/application/services/auth.service';

const ENV = process.env.NODE_ENV || 'local';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/.${ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersServiceImpl],
})
export class AppModule {}

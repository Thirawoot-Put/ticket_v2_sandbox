import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';

const ENV = process.env.NODE_ENV || 'local';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/.${ENV}.env`,
      isGlobal: true,
    }),
    //TypeOrmModule.forRoot({
    //  type: 'postgres',
    //  host: 'localhost',
    //  port: 25433,
    //  username: 'admin',
    //  password: '1234',
    //  database: 'ticket_user',
    //  entities: [],
    //  synchronize: true,
    //}),
    TypeOrmModule.forRootAsync(databaseConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandRunnerModule } from 'nest-commander';
import { LoggerModule } from 'nestjs-pino';

import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

import database from '../../config/database';
import security from '../../config/security';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [database, security],
    }),
    CommandRunnerModule.forModule(),
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: false,
        transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
      }
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        autoLoadEntities: true,
        synchronize: false,
      })
    }),
    AuthModule,
    UserModule,
  ],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserCli } from './cli/create-user.cli';
import { CreateUserQuestions } from './cli/create-user.questions';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  exports: [UserService],
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UserService,
    CreateUserCli,
    CreateUserQuestions
  ],
})
export class UserModule {}

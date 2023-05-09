import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { logger } from 'nx/src/utils/logger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';



@Command({
  name: 'user:create',
})
export class CreateUserCli extends CommandRunner {
  private readonly logger = new Logger(CreateUserCli.name);

  constructor(
    private readonly inquirer: InquirerService,
    private readonly userService: UserService,
  ) {
    super();
  }

  async run(): Promise<void> {
    logger.info('=== Creating user ===');
    const answers = await this.inquirer.ask('create-user-questions', undefined);
    const dto = plainToInstance(CreateUserDto, answers);

    await this.userService.create(dto);

    logger.info(`User ${dto.username} created`);
  }
}

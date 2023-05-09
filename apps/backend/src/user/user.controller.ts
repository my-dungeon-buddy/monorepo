import {
  Controller,
  Get,
  Param,
  Bind,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from './dto/get-user.dto';

import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({isArray:true, type: GetUserDto})
  async findAll(): Promise<GetUserDto[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: GetUserDto})
  @Bind(Param('id'))
  findOne(id: string) {
    return this.userService.findOne(id);
  }
}

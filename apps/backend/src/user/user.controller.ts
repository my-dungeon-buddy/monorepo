import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Bind, UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUserDto } from './dto/get-user.dto';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
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

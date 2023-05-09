import { Bind, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request as ExpressRequest } from 'express';
import { User } from '../user/entities/user.entity';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalGuard } from './guard/local.guard';
import { Public } from './guard/public.guard';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalGuard)
  @Post('/login')
  @ApiBody({type: LoginDto})
  @ApiOkResponse()
  @Bind(Request())
  public async login (request: ExpressRequest): Promise<unknown> {
    return this.authService.login(request.user as User);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { GetUserDto } from '../../user/dto/get-user.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<GetUserDto> {
    try {
      const user = await this.authService.validateUser(username, password);

      return GetUserDto.fromDomain(user);
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}

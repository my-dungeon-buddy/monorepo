import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';

import { UserService } from '../user/user.service';
import { InvalidCredentials } from './invalid-credentials.error';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findOneByUsername(username);
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new InvalidCredentials();
    }

    return user;
  }

  async login(user: User | undefined) {
    if (!user) {
      throw new Error();
    }

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

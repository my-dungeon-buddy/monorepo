import { createMock } from '@golevelup/ts-jest';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { InvalidCredentials } from './invalid-credentials.error';

describe('AuthService', () => {
  const password = 's3cr3t';
  let user: User;

  let userService: UserService;
  let jwtService: JwtService;
  let sut: AuthService;

  beforeEach(async () => {
    user = User.create('some-id', 'username', 'email', await bcrypt.hash(password, 10));
    userService = createMock<UserService>();
    jwtService = createMock<JwtService>();
    sut = new AuthService(userService, jwtService);
  });

  it('should validate user if password input is right', async () => {
    // arrange
    jest.spyOn(userService, 'findOneByUsername').mockResolvedValue(user)

    // act
    const result = await sut.validateUser('username', password);

    // assert
    expect(result).toBeInstanceOf(User)
  });

  it('should throw an error if user is not found', async () => {
    // arrange
    jest.spyOn(userService, 'findOneByUsername').mockResolvedValue(null);

    // act
    const test = () => sut.validateUser('username', password);

    // assert
    await expect(test).rejects.toThrow(InvalidCredentials);
  });

  it('should throw an error if password input is wrong', async () => {
    // arrange
    jest.spyOn(userService, 'findOneByUsername').mockResolvedValue(user);

    // act
    const test = () => sut.validateUser('username', 'wrongPassword');

    // assert
    await expect(test).rejects.toThrow(InvalidCredentials);
  });
});

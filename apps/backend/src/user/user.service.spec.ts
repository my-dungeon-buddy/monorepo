import { createMock } from '@golevelup/ts-jest';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let userRepository: Repository<User>;
  let service: UserService;

  beforeEach(async () => {
    userRepository = createMock<Repository<User>>()
    service = new UserService(userRepository);
  });

  it('should be save a user', async () => {
    // arrange
    const dto = new CreateUserDto();
    dto.username = 'test';
    dto.email = 'test@test.fr';
    dto.password = 's3cr3t';

    // act
    await service.create(dto);

    // assert
    expect(userRepository.save).toBeCalledWith(expect.any(User));
  });
});

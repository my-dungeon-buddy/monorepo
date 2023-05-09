import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class GetUserDto {
  @ApiProperty()
  public id: string;
  @ApiProperty()
  public username: string;
  @ApiProperty()
  public email: string;

  static fromDomain(user: User): GetUserDto {
    const dto = new GetUserDto();
    dto.id = user.id;
    dto.username = user.username;
    dto.email = user.email;

    return dto;
  }
}

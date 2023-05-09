import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public readonly username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public readonly password: string;
}

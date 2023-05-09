import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  public async create(dto: CreateUserDto): Promise<void> {
    const password = await bcrypt.hash(dto.password, 10);
    const user = User.create(uuid(), dto.username, dto.email, password);

    await this.repository.save(user);
  }

  public async findAll(): Promise<GetUserDto[]> {
    const users = await this.repository.find();

    return users.map(user => GetUserDto.fromDomain(user));
  }

  async findOne(id: string): Promise<GetUserDto | null> {
    const user = await this.repository.findOneBy({id});
    if (!user) {
      return null;
    }
    return GetUserDto.fromDomain(user);
  }

  public async findOneByUsername(username: string): Promise<User | null> {
    return await this.repository.findOneBy({username});
  }
}

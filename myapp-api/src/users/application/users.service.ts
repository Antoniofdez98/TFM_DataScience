import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infrastructure/users.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findAll() {
    return this.usersRepository.findAll();
  }

  create(data: CreateUserDto) {
    return this.usersRepository.create(data);
  }
}

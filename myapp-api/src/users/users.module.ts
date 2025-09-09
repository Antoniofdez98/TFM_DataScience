import { Module } from '@nestjs/common';
import { UsersController } from './interfaces/users.controller';
import { UsersService } from './application/users.service';
import { UsersRepository } from './infrastructure/users.repository';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PrismaService],
})
export class UsersModule {}

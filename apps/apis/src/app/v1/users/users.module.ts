import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '@nest-workspace/core';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService]
})
export class UsersModule {}

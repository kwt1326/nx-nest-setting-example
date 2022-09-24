import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nest-workspace/core';
import { UsersRepository } from './users.repository';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  private readonly repository: UsersRepository;

  constructor(protected readonly prismaService: PrismaService) {
    this.repository = new UsersRepository(prismaService);
  }

  async create(dto: CreateUserDto) {
    return await this.repository.createUser(dto);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

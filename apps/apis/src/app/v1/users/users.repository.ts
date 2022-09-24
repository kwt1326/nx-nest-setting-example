import { BasePrismaRepository, PrismaService } from "@nest-workspace/core";
import { CreateUserDto, FindByIdDto } from "./dto";

class UsersRepository extends BasePrismaRepository {
  constructor(protected readonly prismaService: PrismaService) {
    super(prismaService);
  }

  async createUser(dto: CreateUserDto) {
    return await this.prisma.users.create({ data: dto });
  }

  async findById(dto: FindByIdDto) {
    return await this.prisma.users.findMany({ where: { id: dto.id } });
  }
}

export { UsersRepository }
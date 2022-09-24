import { PrismaService } from "./prisma.service";

abstract class BasePrismaRepository {
  protected readonly prisma: PrismaService;

  constructor(protected readonly prismaService: PrismaService) {
    this.prisma = prismaService;
  }
}

export { BasePrismaRepository }
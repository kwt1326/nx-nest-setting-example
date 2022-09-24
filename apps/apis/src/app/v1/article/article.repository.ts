import { BasePrismaRepository, PrismaService } from "@nest-workspace/core";
import { CreateArticleDto } from "./dto/create-article.dto";
import { FindAllByUserIdDto } from "./dto/select-article.dto";

class ArticleRepository extends BasePrismaRepository {
  constructor(protected readonly prismaService: PrismaService) {
    super(prismaService);
  }

  async createArticle(dto: CreateArticleDto) {
    return await this.prisma.article.create({ data: dto });
  }

  async findArticlesByUser(id: string, dto: FindAllByUserIdDto) {
    const skip = (+dto.page - 1) * (+dto.take || 10);
    const take = +dto.take || 10;
    return await this.prisma.article.findMany({ where: { authorId: +id }, skip, take });
  }
}

export { ArticleRepository }
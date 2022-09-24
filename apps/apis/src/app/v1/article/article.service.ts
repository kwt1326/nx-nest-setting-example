import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nest-workspace/core';
import { ArticleRepository } from './article.repository';
import { CreateArticleDto, FindAllByUserIdDto } from './dto';

@Injectable()
export class ArticleService {
  private readonly repository: ArticleRepository;

  constructor(protected readonly prismaService: PrismaService) {
    this.repository = new ArticleRepository(prismaService);
  }

  async create(dto: CreateArticleDto) {
    return this.repository.createArticle(dto);
  }

  async findAllByUserId(id: string, dto: FindAllByUserIdDto) {
    return this.repository.findArticlesByUser(id, dto);
  }
}

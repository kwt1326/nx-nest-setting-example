import { Module } from '@nestjs/common';
import { PrismaService } from '@nest-workspace/core';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  providers: [PrismaService, ArticleService]
})
export class ArticleModule {}

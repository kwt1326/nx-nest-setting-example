import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { API_V1 } from '@nest-workspace/core';
import { ArticleService } from './article.service';
import { CreateArticleDto, FindAllByUserIdDto } from './dto';

@Controller({ path: `${API_V1}/article` })
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() dto: CreateArticleDto) {
    return this.articleService.create(dto);
  }

  @Get(':id')
  async findAllByUserId(@Param('id') id: string, @Query() dto: FindAllByUserIdDto) {
    return this.articleService.findAllByUserId(id, dto);
  }
}

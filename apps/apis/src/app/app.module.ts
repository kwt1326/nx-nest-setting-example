import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './v1/users/users.module';
import { ArticleModule } from './v1/article/article.module';

@Module({
  imports: [ArticleModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

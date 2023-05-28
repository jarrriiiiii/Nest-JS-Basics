import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FeedPostEntity } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedPostEntity])], //Attaching the entity 'FeedPostEntity' here in the 'Feed Module'
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}

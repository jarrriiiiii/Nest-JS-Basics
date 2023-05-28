import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedPost } from './post.interface';

@Controller('feed')
export class FeedController {

    //Access to the Service
 constructor(private feedService : FeedService){} 


 @Post()
 createPost(@Body() post :  FeedPost) {
    return this.feedService.createPost(post)
 }

@Get()
findAllPosts(){
    return this.feedService.findAllPosts();
    
}


@Put('/:id')
updatePost(@Param('id') id : number, @Body() feedpost : FeedPost) {

return this.feedService.updatePost(id, feedpost);
}


@Delete('/:id')
deletePost(@Param('id') id: number){

    return this.feedService.deletePost(id);

}
}
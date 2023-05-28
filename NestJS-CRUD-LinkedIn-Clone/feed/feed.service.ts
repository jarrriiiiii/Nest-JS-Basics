import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { FeedPostEntity } from './post.entity';
import { FeedPost } from './post.interface';

@Injectable()
export class FeedService {

//Bringing the repository here, on which we will perform CRUD
constructor(
    @InjectRepository(FeedPostEntity) 
    private readonly feedPostRepository : Repository <FeedPostEntity> //attaching entity in the repository

) {}

//Create
createPost(feedpost: FeedPost) {
return this.feedPostRepository.save(feedpost)
}

//Find All Posts
findAllPosts() {
 return from(this.feedPostRepository.find());   
}

//Update the Post
updatePost(id : number, feedpost : FeedPost){
  return  this.feedPostRepository.update(id, feedpost)
}

//Delete the Post
deletePost(id: number){
    return this.feedPostRepository.delete(id);
}

}
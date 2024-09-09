import { Post } from '../../domain/entities/posts/post.entity';
import { PostViewModel } from '../models/post/post-view.model';
import { Mapper } from './mapper.mapper';

export class PostsMapper implements Mapper<Post, PostViewModel> {
  mapTo(obj: Post): PostViewModel {
    return {
      creator: obj.userId,
      postId: obj.id,
      postTitle: obj.title,
      description: obj.body,
    };
  }

  mapFrom(obj: PostViewModel): Post {
    return {
      userId: obj.creator,
      id: obj.postId,
      title: obj.postTitle,
      body: obj.description,
    };
  }
}

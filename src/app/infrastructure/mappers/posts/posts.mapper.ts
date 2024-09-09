import { Post } from '../../../domain/entities/posts/post.entity';
import { Mapper } from '../mapper.mapper';
import { PostViewModel } from './models/post-view.model';

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

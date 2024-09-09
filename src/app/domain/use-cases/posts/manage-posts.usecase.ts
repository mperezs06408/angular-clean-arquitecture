import { Post } from '@domain/entities/posts/post.entity';
import { BlogGateway } from '@domain/entities/posts/blog.gateway';

export class PostManagementUseCase {
  constructor(private _blogGateway: BlogGateway) {}

  getAllPostFromSource() {
    return this._blogGateway.getAllPosts();
  }

  getPostById(id: number) {
    return this._blogGateway.getPostById(id);
  }

  createNewPostEntry(post: Post) {
    return this._blogGateway.createNewPost(post);
  }

  deletePostEntry(id: number) {
    return this._blogGateway.deleteExistingPost(id);
  }
}

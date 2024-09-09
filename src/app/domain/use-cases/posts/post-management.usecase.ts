import { PostModel } from '../../entities/posts/post.entity';
import { BlogGateway } from '../../gateways/posts/blog.gateway';

export class PostManagementUseCase {
  constructor(private _blogGateway: BlogGateway) {}

  getAllPostFromSource() {
    return this._blogGateway.getAllPosts();
  }

  getPostById(id: number) {
    return this._blogGateway.getPostById(id);
  }

  createNewPostEntry(post: PostModel) {
    return this._blogGateway.createNewPost(post);
  }

  deletePostEntry(id: number) {
    return this._blogGateway.deleteExistingPost(id);
  }
}

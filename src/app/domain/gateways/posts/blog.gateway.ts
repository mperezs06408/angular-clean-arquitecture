import { Observable } from 'rxjs';
import { PostModel } from '../../entities/posts/post.entity';

export abstract class BlogGateway {
  abstract getAllPosts(): Observable<PostModel[]>;
  abstract getPostById(id: number): Observable<PostModel>;
  abstract createNewPost(post: PostModel): Observable<boolean>;
  abstract deleteExistingPost(id: number): Observable<boolean>;
}

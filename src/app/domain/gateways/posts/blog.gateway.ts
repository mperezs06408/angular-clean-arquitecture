import { Observable } from 'rxjs';
import { Post } from '../../entities/posts/post.entity';

export abstract class BlogGateway {
  abstract getAllPosts(): Observable<Post[]>;
  abstract getPostById(id: number): Observable<Post>;
  abstract createNewPost(post: {
    title: string;
    body: string;
    userId: number;
  }): Observable<boolean>;
  abstract deleteExistingPost(id: number): Observable<boolean>;
}

import { Post } from '@domain/entities/posts/post.entity';
import { PostManagementUseCase } from '@domain/use-cases/posts/manage-posts.usecase';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsResolverService implements Resolve<Post[]> {
  constructor(private postManagementUseCase: PostManagementUseCase) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post[]> {
    return this.postManagementUseCase.getAllPostFromSource();
  }
}

import { Injectable } from '@angular/core';
import { BlogGateway } from '@domain/entities/posts/blog.gateway';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Post } from '@domain/entities/posts/post.entity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostManagementGatewayService implements BlogGateway {
  private _baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(this._baseUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this._httpClient.get<Post>(`${this._baseUrl}/${id}`);
  }

  createNewPost(post: {
    title: string;
    body: string;
    userId: number;
  }): Observable<boolean> {
    return this._httpClient
      .post<{ title: string; body: string; userId: number }>(
        this._baseUrl,
        post,
        { headers: { contentType: 'application/json; charset=UTF-8' } }
      )
      .pipe(
        map(() => true),
        catchError((e) => {
          console.error(e);
          return of(false);
        })
      );
  }

  deleteExistingPost(id: number): Observable<boolean> {
    return this._httpClient.delete(`${this._baseUrl}/${id}`).pipe(
      tap(() => {
        console.log('it works');
      }),
      map(() => true),
      catchError((e) => {
        console.log(e);
        return of(false);
      })
    );
  }
}

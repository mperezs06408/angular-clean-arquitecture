import { Post } from '@/domain/entities/posts/post.entity';
import { PostManagementUseCase } from '@/domain/use-cases/posts/manage-posts.usecase';
import { PostCard } from '@/ui/components/molecules/post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, PostCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage implements OnInit {
  private postSubject = new BehaviorSubject<Post[]>([]);
  public posts$: Observable<Post[]> = this.postSubject.asObservable();

  constructor(
    private postManagementUseCase: PostManagementUseCase,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postSubject.next(this.route.snapshot.data['posts']);
  }

  deletePost(id: number) {
    this.postManagementUseCase.deletePostEntry(id).subscribe({
      complete: () => {
        const currentPosts = this.postSubject.getValue();
        const postsFiltered = currentPosts.filter((i) => i.id !== id);

        this.postSubject.next(postsFiltered);
      },
    });
  }
}

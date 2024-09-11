import { Post } from '@domain/entities/posts/post.entity';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm-post-card',
  standalone: true,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCard {
  @Input() post!: Post;
  @Output() onClickDeleteEvent = new EventEmitter<number>();

  onClickButton(id: number) {
    console.log({ id }, 'from component');
    this.onClickDeleteEvent.emit(id);
  }
}

import { PostCard } from './post-card.component';
import { Post } from '@domain/entities/posts/post.entity';

describe('PostCard', () => {
  let component: PostCard;
  const mockPost: Post = {
    id: 1,
    title: 'Post test',
    body: 'Lorem ipsum',
    userId: 1,
  };

  beforeEach(() => {
    component = new PostCard();
  });

  it('Should to create service', () => {
    expect(component).toBeTruthy();
  });

  it('Should to received mock', () => {
    component.post = mockPost;

    expect(component.post).toBe(mockPost);
  });

  it('Should to emit event when button is clicked', () => {
    spyOn(component.onClickDeleteEvent, 'emit');

    component.onClickButton(mockPost.id);

    expect(component.onClickDeleteEvent.emit).toHaveBeenCalledWith(mockPost.id);
  });
});

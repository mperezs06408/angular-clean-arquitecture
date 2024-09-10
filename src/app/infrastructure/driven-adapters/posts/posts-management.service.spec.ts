import { provideHttpClient, withFetch } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PostManagementGatewayService } from './post-management.service';

describe('PostManagementService', () => {
  let service: PostManagementGatewayService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [PostManagementGatewayService, provideHttpClient(withFetch())],
    });

    service = TestBed.inject(PostManagementGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return an posts array as observable', (done: DoneFn) => {
    service.getAllPosts().subscribe((list) => {
      expect(list).toBeTruthy();
      expect(list).toHaveSize(100);
      done();
    });
  });

  it('Should return a post by id', (done: DoneFn) => {
    const id = 1;
    service.getPostById(id).subscribe((post) => {
      expect(post).toBeTruthy();
      expect(post.id).toBe(id);
      done();
    });
  });

  it('Should return true when new post is created', (done: DoneFn) => {
    const newPost = { title: 'new post', body: 'body of post', userId: 1 };

    service.createNewPost(newPost).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
  });

  it('Should return true when post is deleted by id', (done: DoneFn) => {
    const id = 1;

    service.deleteExistingPost(id).subscribe((value) => {
      expect(value).toBeTrue();

      done();
    });
  });
});

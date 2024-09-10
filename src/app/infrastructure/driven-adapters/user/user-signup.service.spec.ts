import { TestBed } from '@angular/core/testing';
import { UserSignUpGatewayService } from './user-signup.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { User } from '@/domain/entities/user/user.entity';

describe('UserSignUpGatewayService', () => {
  let service: UserSignUpGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSignUpGatewayService, provideHttpClient(withFetch())],
    });

    service = TestBed.inject(UserSignUpGatewayService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return an observer when is SignUp', (done: DoneFn) => {
    service.signUp({} as User).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { CognitoAuthService } from './cognito-auth.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { User } from '@domain/entities/user/user.entity';

describe('CognitoAuthService', () => {
  let service: CognitoAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitoAuthService, provideHttpClient(withFetch())],
    });

    service = TestBed.inject(CognitoAuthService);
  });

  it('Should to create service', () => {
    expect(service).toBeTruthy();
  });

  it('Should to return null on unexisting user', (done: DoneFn) => {
    service
      .logIn({ email: 'email', password: 'password' })
      .subscribe((userReturned) => {
        expect(userReturned).toBeNull();
        done();
      });
  });

  it('should to logout any user', (done: DoneFn) => {
    service.logOut().subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
  });

  it('Should return an observer when is SignUp', (done: DoneFn) => {
    service.signUp({} as User).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
  });
});

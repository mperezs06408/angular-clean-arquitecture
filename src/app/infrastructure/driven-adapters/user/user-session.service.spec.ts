import { TestBed } from '@angular/core/testing';
import { UserSessionGatewayService } from './user-session.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { usersMock } from '@/infrastructure/helpers/usersMock.mock';

describe('UserSessionGatewayService', () => {
  let service: UserSessionGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSessionGatewayService, provideHttpClient(withFetch())],
    });

    service = TestBed.inject(UserSessionGatewayService);
  });

  it('Should to create service', () => {
    expect(service).toBeTruthy();
  });

  it('Should to logIn existing user and return it info', (done: DoneFn) => {
    const user = usersMock[0];
    service
      .logIn({ username: user.username, password: user.password })
      .subscribe((userReturned) => {
        expect(userReturned).toEqual(user);
        done();
      });
  });

  it('Should to return null on unexisting user', (done: DoneFn) => {
    service
      .logIn({ username: 'username', password: 'password' })
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
});

import { Observable } from 'rxjs';
import { User } from './user.entity';

export interface IUserInfo {
  email: string;
  password: string;
}

export abstract class SessionGateway {
  abstract logIn({ email, password }: IUserInfo): Observable<boolean>;
  abstract logOut(): Observable<boolean>;
  abstract signUp(user: User): Observable<boolean>;
  abstract confirmSignUp(params: {
    username: string;
    confirmationCode: string;
  }): Observable<boolean>;
}

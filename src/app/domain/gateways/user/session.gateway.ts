import { Observable } from 'rxjs';

export interface IUserInfo {
  username: string;
  password: string;
}

export abstract class SessionGateway {
  abstract logIn({ username, password }: IUserInfo): Observable<boolean>;
  abstract logOut(): Observable<boolean>;
}

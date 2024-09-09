import { Observable } from 'rxjs';
import { User } from '../../entities/user/user.entity';

export interface IUserInfo {
  username: string;
  password: string;
}

export abstract class SessionGateway {
  abstract logIn({ username, password }: IUserInfo): Observable<User | null>;
  abstract logOut(): Observable<boolean>;
}

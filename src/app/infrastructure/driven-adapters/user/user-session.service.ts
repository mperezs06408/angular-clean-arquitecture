import { Injectable } from '@angular/core';
import {
  IUserInfo,
  SessionGateway,
} from '../../../domain/gateways/user/session.gateway';
import { Observable, map, of } from 'rxjs';
import { User } from '../../../domain/entities/user/user.entity';
import { usersMock } from '../../helpers/usersMock.mock';
import { SignUpGateway } from '../../../domain/gateways/user/signup.gateway';

@Injectable({
  providedIn: 'root',
})
export class UserSessionGatewayService
  implements SessionGateway, SignUpGateway
{
  private usersData$ = of(usersMock);

  signUp(user: User): Observable<boolean> {
    return of(true);
  }

  logIn({ username, password }: IUserInfo): Observable<User | null> {
    return this.usersData$.pipe(
      map((users) => {
        const userFound = users.find(
          (user) => user.username === username && user.password === password
        );

        return userFound || null;
      })
    );
  }

  logOut(): Observable<boolean> {
    return of(true);
  }
}

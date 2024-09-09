import { Injectable } from '@angular/core';
import {
  IUserInfo,
  SessionGateway,
} from '@domain/entities/user/session.gateway';
import { Observable, map, of } from 'rxjs';
import { User } from '@domain/entities/user/user.entity';
import { usersMock } from '@infrastructure/helpers/usersMock.mock';

@Injectable({
  providedIn: 'root',
})
export class UserSessionGatewayService implements SessionGateway {
  private usersData$ = of(usersMock);

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

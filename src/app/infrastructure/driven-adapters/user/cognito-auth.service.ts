import { Injectable } from '@angular/core';
import {
  IUserInfo,
  SessionGateway,
} from '@domain/entities/user/session.gateway';
import { Observable, catchError, from, map, of } from 'rxjs';
import { User } from '@domain/entities/user/user.entity';

import { Amplify } from 'aws-amplify';
import {
  confirmSignUp as confirmSignUpOnCognito,
  signIn as logInOnCognito,
  signOut as logOutOnCognito,
  signUp as singUpOnCognito,
} from 'aws-amplify/auth';
import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CognitoAuthService implements SessionGateway {
  constructor() {
    Amplify.configure(environment.cognito);
  }

  logIn({ email, password }: IUserInfo): Observable<boolean> {
    return from(logInOnCognito({ username: email, password })).pipe(
      map((value) => value.isSignedIn),
      catchError(() => of(false))
    );
  }

  logOut(): Observable<boolean> {
    return from(logOutOnCognito()).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  signUp(user: User): Observable<boolean> {
    return from(
      singUpOnCognito({
        username: user.email,
        password: user.password,
        options: {
          userAttributes: {
            email: user.email,
            phone_number: '+57' + user.phone_number,
            name: user.name,
          },
        },
      })
    ).pipe(
      map((value) => value.isSignUpComplete ?? false),
      catchError(() => of(false))
    );
  }

  confirmSignUp(params: {
    username: string;
    confirmationCode: string;
  }): Observable<boolean> {
    return from(confirmSignUpOnCognito(params)).pipe(
      map((value) => value.isSignUpComplete ?? false),
      catchError(() => of(false))
    );
  }
}

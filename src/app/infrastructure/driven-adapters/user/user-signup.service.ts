import { Injectable } from '@angular/core';
import { SignUpGateway } from '@domain/entities/user/signup.gateway';
import { Observable, of } from 'rxjs';
import { User } from '@domain/entities/user/user.entity';

@Injectable({
  providedIn: 'root',
})
export class UserSignUpGatewayService implements SignUpGateway {
  signUp(_user: User): Observable<boolean> {
    return of(true);
  }
}

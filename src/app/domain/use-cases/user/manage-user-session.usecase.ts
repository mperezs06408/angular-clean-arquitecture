import { Injectable } from '@angular/core';
import {
  IUserInfo,
  SessionGateway,
} from '@domain/entities/user/session.gateway';
import { User } from '@domain/entities/user/user.entity';

@Injectable({ providedIn: 'root' })
export class UserSessionUseCase {
  constructor(private _sessionGateway: SessionGateway) {}

  loginUser(params: IUserInfo) {
    return this._sessionGateway.logIn(params);
  }

  logoutUser() {
    return this._sessionGateway.logOut();
  }

  signUp(user: User) {
    return this._sessionGateway.signUp(user);
  }

  confirmUserRegister(params: { username: string; confirmationCode: string }) {
    return this._sessionGateway.confirmSignUp(params);
  }
}

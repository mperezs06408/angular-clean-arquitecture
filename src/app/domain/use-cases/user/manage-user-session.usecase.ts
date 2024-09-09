import { IUserInfo, SessionGateway } from '../../entities/user/session.gateway';

export class UserSessionUseCase {
  constructor(private _sessionGateway: SessionGateway) {}

  loginUser(params: IUserInfo) {
    return this._sessionGateway.logIn(params);
  }

  logoutUser() {
    return this._sessionGateway.logOut();
  }
}

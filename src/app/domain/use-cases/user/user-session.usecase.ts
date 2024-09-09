import { UserModel } from '../../entities/user/user.entity';
import { IUserInfo, SessionGateway } from '../../gateways/user/session.gateway';
import { SignUpGateway } from '../../gateways/user/signup.gateway';

export class UserSessionUseCase {
  constructor(
    private _sessionGateway: SessionGateway,
    private _signUpGateway: SignUpGateway
  ) {}

  registerUser(user: UserModel) {
    return this._signUpGateway.signUp(user);
  }

  loginUser(params: IUserInfo) {
    return this._sessionGateway.logIn(params);
  }

  logoutUser() {
    return this._sessionGateway.logOut();
  }
}

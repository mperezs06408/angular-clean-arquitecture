import { SignUpGateway } from '../../entities/user/signup.gateway';
import { User } from '../../entities/user/user.entity';

export class UserSignUpUseCase {
  constructor(private _signUpGateway: SignUpGateway) {}

  signUp(user: User) {
    return this._signUpGateway.signUp(user);
  }
}

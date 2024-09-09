import { Observable } from 'rxjs';
import { UserModel } from '../../entities/user/user.entity';

export abstract class SignUpGateway {
  abstract signUp(user: UserModel): Observable<boolean>;
}

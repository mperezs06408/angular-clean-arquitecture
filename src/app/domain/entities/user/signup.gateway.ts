import { Observable } from 'rxjs';
import { User } from './user.entity';

export abstract class SignUpGateway {
  abstract signUp(user: User): Observable<boolean>;
}

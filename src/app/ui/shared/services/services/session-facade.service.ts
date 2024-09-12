import { UserSessionUseCase } from '@/app/domain/use-cases/user/manage-user-session.usecase';
import { SpinnerService } from '@/app/ui/components/molecules/spinner/spinner.service';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

interface MethodsParams {
  onSuccess: () => void;
  onFailed: () => void;
}

export interface UserLoginParams {
  email: string;
  password: string;
}

export interface UserRegisterParams extends UserLoginParams {
  name: string;
  phone_number: string;
  role: 'Admin' | 'User';
  username: string;
}

export interface UserRegisterConfirmationParams
  extends Pick<UserRegisterParams, 'username'> {
  confirmationCode: string;
}

@Injectable()
export class SessionFacadeService implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private userSession: UserSessionUseCase,
    private loadingSpinner: SpinnerService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(methods: MethodsParams, params: UserLoginParams) {
    let status: boolean = false;

    this.loadingSpinner.show();

    this.userSession
      .loginUser(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => {
          status = value;
        },
        complete: () => {
          this.loadingSpinner.hide();
          if (status) {
            methods.onSuccess();
          } else {
            methods.onFailed();
          }
        },
        error: (e) => {
          this.loadingSpinner.hide();
          console.error(`error during fetching service: ${e}`);
          methods.onFailed();
        },
      });
  }
}

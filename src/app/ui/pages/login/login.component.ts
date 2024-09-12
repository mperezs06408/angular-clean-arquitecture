import { UserSessionUseCase } from '@domain/use-cases/user/manage-user-session.usecase';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogInFormComponent } from '@ui/components/organisms/login-form/login-form.component';
import { SignUpFormComponent } from '@ui/components/organisms/signup-form/signup-form.component';
import { SessionFacadeService } from '@ui/shared/services/services/session-facade.service';

@Component({
  selector: 'login-page',
  standalone: true,
  providers: [SessionFacadeService],
  imports: [CommonModule, FormsModule, LogInFormComponent, SignUpFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LogInPage {
  views = ['login', 'signup'];
  activeView = this.views[0];

  constructor(
    private userSession: UserSessionUseCase,
    private userManagement: SessionFacadeService
  ) {}

  onChangeView(newView: string) {
    this.activeView = newView;
  }

  onSignOut() {
    this.userSession.logoutUser().subscribe({
      complete: () => {
        alert('sesión cerrada');
      },
    });
  }

  onRegister(params: {
    email: string;
    password: string;
    name: string;
    phone_number: string;
  }) {
    alert('registro exitoso');

    let value = false;
    this.userSession
      .signUp({
        ...params,
        role: 'Admin',
        username: params.email,
      })
      .subscribe({
        next: (resp) => {
          value = resp;
        },
        complete() {
          if (value) {
            alert('usuario creado exitosamente');
          } else {
            alert('algo fallo :(');
          }
        },
      });
  }

  onConfirmCode(params: { username: string; confirmationCode: string }) {
    let value = false;
    this.userSession.confirmUserRegister(params).subscribe({
      next: (resp) => {
        value = resp;
      },
      complete: () => {
        if (value) {
          alert('usuario confirmado');
          this.activeView = this.views[0];
        } else {
          alert('algo fallo :(');
        }
      },
    });
  }

  onSubmit(params: { email: string; password: string }) {
    this.userManagement.onSubmit(
      {
        onSuccess: () => {
          alert('Sesión iniciada con Cognito.');
        },
        onFailed: () => {
          alert('Algo falló, intenta más tarde.');
        },
      },
      params
    );
  }
}

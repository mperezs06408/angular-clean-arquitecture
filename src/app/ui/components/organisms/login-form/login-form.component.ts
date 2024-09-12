import { CommonModule } from '@angular/common';
import { Component, Output, inject, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'o-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LogInFormComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
  @Output() onSubmit: EventEmitter<{ email: string; password: string }> =
    new EventEmitter<{ email: string; password: string }>();

  submit() {
    const { email, password } = this.loginForm.value;

    this.onSubmit.emit({ email: email ?? '', password: password ?? '' });
  }

  isInvalidForm() {
    return this.loginForm.invalid;
  }
}

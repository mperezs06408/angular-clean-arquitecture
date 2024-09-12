import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'o-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignUpFormComponent {
  private fb = inject(FormBuilder);
  signupForm = this.fb.group({
    email: [''],
    password: [''],
    name: [''],
    phone_number: [''],
  });
  confirmationStepForm = this.fb.group({
    username: [''],
    confirmationCode: [''],
  });
  formStep = ['signup', 'confirmation'];
  currentStep = this.formStep[0];

  @Output() onSignUp: EventEmitter<{
    email: string;
    password: string;
    name: string;
    phone_number: string;
  }> = new EventEmitter<{
    email: string;
    password: string;
    name: string;
    phone_number: string;
  }>();
  @Output() onConfirm: EventEmitter<{
    username: string;
    confirmationCode: string;
  }> = new EventEmitter<{ username: string; confirmationCode: string }>();

  signUp() {
    const { email, password, name, phone_number } = this.signupForm.value;
    this.onSignUp.emit({
      email: email ?? '',
      password: password ?? '',
      name: name ?? '',
      phone_number: phone_number ?? '',
    });
    this.currentStep = this.formStep[1];
  }

  confirm() {
    const { username, confirmationCode } = this.confirmationStepForm.value;
    this.onConfirm.emit({
      username: username ?? '',
      confirmationCode: confirmationCode ?? '',
    });
  }

  isSignUpFormInvalid() {
    return this.signupForm.invalid;
  }

  isConfirmFormInvalid() {
    return this.confirmationStepForm.invalid;
  }
}

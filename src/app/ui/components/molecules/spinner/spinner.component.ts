import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'm-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="overlay" *ngIf="isLoading$ | async">
    <div class="loader"></div>
  </div>`,
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  isLoading$;

  constructor(private readonly spinnerService: SpinnerService) {
    this.isLoading$ = this.spinnerService.isLoading$;
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '@ui/components/molecules/spinner/spinner.component';

@Component({
  selector: 'main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  imports: [RouterLink, SpinnerComponent],
})
export class MainLayout {
  constructor() {}
}

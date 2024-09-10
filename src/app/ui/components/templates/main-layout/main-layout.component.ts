import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../molecules/spinner/spinner.component';
import { SpinnerService } from '../../molecules/spinner/spinner.service';

@Component({
  selector: 'main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  imports: [RouterLink, SpinnerComponent],
})
export class MainLayout {
  constructor(private test: SpinnerService) {
    this.test.show();
  }
}

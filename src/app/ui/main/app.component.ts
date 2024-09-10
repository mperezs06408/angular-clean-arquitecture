import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from '@ui/components/templates/main-layout/main-layout.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

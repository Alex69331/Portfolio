import { Component } from '@angular/core';
import { DessertsComponent } from './desserts/desserts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DessertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

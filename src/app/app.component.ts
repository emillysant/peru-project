import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PeruComponent } from './pages/peru/peru.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeruComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'peru-project';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-peru',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatButtonModule],
  templateUrl: './peru.component.html',
  styleUrl: './peru.component.scss',
})
export class PeruComponent {}

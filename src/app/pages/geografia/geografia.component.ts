import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GeografiaService } from '../../service/geografia.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-geografia',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './geografia.component.html',
  styleUrl: './geografia.component.scss',
})
export class GeografiaComponent implements OnInit {
  geografia: any[] = [];

  constructor(private geografiaService: GeografiaService) {}

  ngOnInit(): void {
    this.getGeografia();
  }

  getGeografia(): void {
    this.geografiaService.getGeografia().subscribe((geografia) => {
      this.geografia = geografia;
    });
  }
}

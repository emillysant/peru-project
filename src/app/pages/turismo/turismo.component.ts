import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TurismoService } from '../../service/turismo.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-turismo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './turismo.component.html',
  styleUrl: './turismo.component.scss',
})
export class TurismoComponent implements OnInit {
  turismo: any[] = [];

  constructor(private turismoService: TurismoService) {}

  ngOnInit(): void {
    this.getTurismo();
  }

  getTurismo(): void {
    this.turismoService.getTurismo().subscribe((data) => {
      this.turismo = data;
    });
  }
}

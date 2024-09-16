import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CulturaService } from '../../service/cultura.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EditCulturaComponent } from '../../component/edit-cultura/edit-cultura.component';

@Component({
  selector: 'app-cultura',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './cultura.component.html',
  styleUrl: './cultura.component.scss',
})
export class CulturaComponent implements OnInit {
  cultura: any[] = [];

  constructor(
    private culturaService: CulturaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCultura();
  }

  getCultura(): void {
    this.culturaService.getCultura().subscribe((data) => {
      this.cultura = data;
    });
  }

  adicionarCultura(): void {
    const dialogRef = this.dialog.open(EditCulturaComponent, {
      width: '400px',
      data: { name: '', description: '' },
    });

    dialogRef.componentInstance.save.subscribe((newCultura: any) => {
      this.culturaService
        .createCultura(newCultura)
        .subscribe((createdCultura) => {
          this.cultura.push(createdCultura);
        });
    });
  }

  editarCultura(item: any): void {
    const dialogRef = this.dialog.open(EditCulturaComponent, {
      width: '400px',
      data: item,
    });

    dialogRef.componentInstance.save.subscribe((updatedCultura: any) => {
      this.cultura = this.cultura.map((c) =>
        c.id === updatedCultura.id ? updatedCultura : c
      );
      this.culturaService.updateCultura(updatedCultura).subscribe();
    });
  }

  deletarCultura(id: number): void {
    this.culturaService.deletarCultura(id).subscribe(() => {
      this.cultura = this.cultura.filter((c) => c.id !== id);
    });
  }
}

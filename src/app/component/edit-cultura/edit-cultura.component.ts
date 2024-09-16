import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-cultura',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './edit-cultura.component.html',
  styleUrl: './edit-cultura.component.scss',
})
export class EditCulturaComponent {
  @Input() cultura: any;
  @Output() save = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<EditCulturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cultura = { ...data };
    console.log(this.cultura);
  }

  onSave(): void {
    this.save.emit(this.cultura);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

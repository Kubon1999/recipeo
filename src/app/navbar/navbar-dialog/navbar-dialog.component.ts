import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar-dialog',
  templateUrl: './navbar-dialog.component.html',
  styleUrls: ['./navbar-dialog.component.scss']
})
export class NavbarDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NavbarDialogComponent>) {
    }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

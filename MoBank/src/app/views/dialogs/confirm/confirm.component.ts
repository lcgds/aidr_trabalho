import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Confirmation } from './confirmation';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: Confirmation) { }

  confirm() {
    this.data.answer = true;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.data.answer = false;
    this.dialogRef.close(this.data);
  }

}

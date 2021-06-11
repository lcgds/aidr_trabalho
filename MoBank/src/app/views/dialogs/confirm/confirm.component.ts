import { Confirmation } from './confirmation';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
// @Inject(MAT_DIALOG_DATA) public data: ConfirmationVo
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Confirmation) { }

  confirm() {
    this.data.answer = true;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.data.answer = false;
    this.dialogRef.close(this.data);
  }

}

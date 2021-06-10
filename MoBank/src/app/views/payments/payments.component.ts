import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { Confirmation } from '../dialogs/confirm/confirmation';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments = new Array<Payment>();
  columns = ['id', 'month', 'year', 'description', 'value', 'actions'];

  selectedPayment?: Payment = undefined;
  
  insertMode = false;
  editMode = false;


  constructor(private paymentService: PaymentService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.list();
  }

  select(payment: Payment) {
    this.selectedPayment = payment;
    this.insertMode = false;
    this.editMode = true;
    //this.snackBar.open(payment.description, 'Fechar');
  }

  list(): void {
    this.paymentService.get().subscribe(
      payments => {
        this.payments = payments;
      },
      error => {
        //Back
        const response = error as HttpErrorResponse;
        console.log(response);

        //Front
        this.snackBar.open(`Erro #${response.status}: ${response.statusText}`, 'Fechar', {duration: 3000});
      }
    );
  }

  getTotal(): number {
    let total = 0;

    this.payments.forEach(element => {
      total += element.value;
    });

    return total;
  }

  cancel(): void {
    this.selectedPayment = undefined;
    this.insertMode = false;
    this.editMode = false;
  }
  
  save(): void {
    if (this.insertMode && this.selectedPayment) {
      this.paymentService.post(this.selectedPayment).subscribe(()=> {
        this.getTotal();
        this.list();
        this.cancel();
        this.snackBar.open('Remuneração registrada', 'Fechar', {duration: 3000});
      },
        error => {
          //Back
          const response = error as HttpErrorResponse;
          console.log(response);

          //Front
          this.snackBar.open(`Erro #${response.status}: ${response.statusText}`, 'Fechar', {duration: 3000});
        }
      );
    } else if (this.editMode && this.selectedPayment) {
      this.paymentService.patch(this.selectedPayment).subscribe(() => {
        this.getTotal();
        this.list();
        this.cancel();
        this.snackBar.open('Remuneração salva', 'Fechar', {duration: 3000});
      },
        error => {
          //Back
          const response = error as HttpErrorResponse;
          console.log(response);

          //Front
          this.snackBar.open(`Erro #${response.status}: ${response.statusText}`, 'Fechar', {duration: 3000});
        }
      );
    }
  }

  insert(): void {
    this.insertMode = true;
    this.editMode = false;

    this.selectedPayment = {
      id: undefined,
      month: "Junho",
      year: 2021,
      description: '',
      value: 1
    }
  }

  delete(idToDelete: number): void {
    const confirmation = this.dialog.open(ConfirmComponent, {
      data: {
        id: idToDelete,
        answer: false
      }
    });

    confirmation.afterClosed().subscribe((event: Confirmation) => {
      if (event && event.answer) {
        this.paymentService.delete(idToDelete).subscribe();
        this.getTotal();
        this.list();
      } 
    });
  }
}

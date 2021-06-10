import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments = new Array<Payment>();
  columns = ['id', 'month', 'year', 'description', 'value', 'actions'];

  constructor(private paymentService: PaymentService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.read();
  }

  read(): void {
    this.paymentService.get().subscribe(
      payments => {
        this.payments = payments;
      },
      error => {
        //Back
        const response = error as HttpErrorResponse;
        console.log(response);

        //Front
        this.snackBar.open(`Erro #${response.status}: ${response.statusText}.`, 'Fechar', {duration: 3000})
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
}

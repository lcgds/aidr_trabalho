import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentsComponent } from '../payments/payments.component';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  
  payments = new Array<Payment>();

  totalAll: number = 0;

  totalIn: number = 0;
  totalOut: number = 0;

  balance: number = 0;

  percentIn: number = 0;
  percentOut: number = 0;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPayments();     
    this.getTotal();
    this.getPercent();
    console.log(this.payments);

    
  }

  getPayments() {
    this.paymentService.get().subscribe(
      payments => {
        this.payments = payments;
      });
  }

  getPercent() {
    this.percentIn = (this.totalIn / this.totalAll) * 100; 
  }

  getTotal(): void {
    this.getTotalIn();
    this.totalAll = this.totalIn;
  }

  getTotalIn(): void {

    this.totalIn = 0;

    this.payments.forEach(element => {
      this.totalIn += element.value;
    });
  }

}

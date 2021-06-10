import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = `${environment.baseUrl}payments`;

  constructor(private http: HttpClient) { }

  get(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.url);
  }

  post(payment: Payment): Observable<Payment> {
    if (!payment) {
      return EMPTY;
    } else {
      return this.http.post<Payment>(this.url, payment);
    }
  }

  patch(payment: Payment): Observable<Payment> {
    if (!payment) {
      return EMPTY;
    } else {
      return this.http.patch<Payment>(this.url + '/' + payment.id, payment);
    }
  }

  delete(id: number): Observable<any> {
    if (!id) {
      return EMPTY;
    } else {
      return this.http.delete(this.url + '/' + id)
    }
  }
}

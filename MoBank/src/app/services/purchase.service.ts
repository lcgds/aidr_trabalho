import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from 'src/app/models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

   address = `${environment.baseUrl}purchases`;

  constructor(private http: HttpClient) { }

  list(): Observable<Purchase[]>{
    return this.http.get<Purchase[]>(this.address);
  } 

  insert(purchase?: Purchase): Observable<Purchase>{
    if(!purchase) return EMPTY;

    return this.http.post<Purchase>(this.address, purchase);
  }

  update(purchase?: Purchase): Observable<Purchase>{
    if(!purchase) return EMPTY;

    return this.http.put<Purchase>(`${this.address}/${purchase.id}`, purchase); 
  }

  remove(id: number): Observable<any>{
    return this.http.delete(`${this.address}/${id}`);
  }
}

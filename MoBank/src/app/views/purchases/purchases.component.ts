import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/views/dialogs/confirm/confirm.component';
import { Confirmation } from 'src/app/views/dialogs/confirm/confirmation';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases = new Array<Purchase>(); //ou purchases = new Purchase[];
  columns = ['name', 'value', 'category','actions'];
  
  selectedPurchase?: Purchase = undefined;
  inserting = false;

  constructor(private purchaseService: PurchaseService, 
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.list();
  }

  showSnackbar(msg: string): void{
    this.snackBar.open(msg, '', {duration: 4000});
  }

  list(): void{
    this.purchaseService.list().subscribe(
      purchases => {
      this.purchases = purchases;
    },
      error => {
        this.handleServiceError(error);
      }
    );
  }

  private handleServiceError(error: HttpErrorResponse): void{ 
        console.log(error);
        this.showSnackbar(error.statusText);
  }

  select(purchase: Purchase){
    this.selectedPurchase = purchase;
    this.inserting = false;
  }

  cancel(){
    this.selectedPurchase = undefined;
    this.list();
  }

  save(){
    if(this.inserting){
      this.insere();
    }else{
      this.atualiza();
    }
  
  }

  insere(){
    this.purchaseService.insert(this.selectedPurchase).subscribe(() => {
        this.cancel();
        this.showSnackbar("Compra Inserida com Sucesso!");
      }, 
      error => {
        this.handleServiceError(error);
      });
  }

  atualiza(){
    this.purchaseService.update(this.selectedPurchase).subscribe(() => {
        this.cancel();
        this.showSnackbar("Compra Atualizada com Sucesso!");
      }, 
      error =>{
        this.handleServiceError(error);
      });

  }

  create(){
    this.inserting = true;
    this.selectedPurchase = {
      id: undefined,
      name: '',
      value: '',
      category: ''
    };
  }

  confirm(removeId?: number){
    const result = this.dialog.open(ConfirmComponent, {
      width: '300px',
      data: {
        id: removeId,
        answer: false
      }
    });
  
    result.afterClosed().subscribe((confirmation: Confirmation) => {
      if(confirmation && confirmation.answer && confirmation.id){
        this.remove(confirmation.id);
      }
    });
  }

  remove(id: number){
    this.purchaseService.remove(id).subscribe(() =>{
      this.list;
    }, 
    error => {
      this.handleServiceError(error);
    });
  }

}

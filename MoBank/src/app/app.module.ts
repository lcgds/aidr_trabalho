import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '@angular/cdk/layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { AboutComponent } from './views/about/about.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { PurchasesComponent } from './views/purchases/purchases.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmComponent } from './views/dialogs/confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnalyticsComponent,
    PaymentsComponent,
    PurchasesComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Angular
    FormsModule,
    HttpClientModule,
    
    //CDK
    LayoutModule,

    //Material Design
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

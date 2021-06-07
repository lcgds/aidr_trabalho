import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { ShoppingComponent } from './views/shopping/shopping.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'shopping', component: ShoppingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

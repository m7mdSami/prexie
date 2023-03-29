import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/discount',
        pathMatch: 'full',
      },
      {
        path: 'discount',
        component: DiscountComponent
      }   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { DiscountComponent } from './discount/discount.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './discount/table/table.component';
import { TapsComponent } from './discount/taps/taps.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    DiscountComponent,
    TableComponent,
    TapsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularSvgIconModule.forRoot(),
    NgbDropdownModule,
    NgbNavModule
  ]
})
export class DashboardModule { }

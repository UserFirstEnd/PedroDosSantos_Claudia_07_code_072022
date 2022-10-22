import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    HomeComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModuleModule
  ]
})
export class AdminModule { }

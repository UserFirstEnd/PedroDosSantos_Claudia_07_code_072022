import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormRoutingModule } from './auth-form-routing.module';
import { UserConnexionComponent } from './components/user-connexion/user-connexion.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    UserConnexionComponent
  ],
  imports: [
    CommonModule,
    AuthFormRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AuthFormModule { }

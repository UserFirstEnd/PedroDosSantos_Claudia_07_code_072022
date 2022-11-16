import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormRoutingModule } from './auth-form-routing.module';
import { UserConnexionComponent } from './components/user-connexion/user-connexion.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { AuthServiceService } from './auth-service.service';
import { SignupConnexionComponent } from './components/signup-connexion/signup-connexion.component';


@NgModule({
  declarations: [
    UserConnexionComponent,
    SignupConnexionComponent
  ],
  imports: [
    CommonModule,
    AuthFormRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    AuthServiceService
  ]
})
export class AuthFormModule { }

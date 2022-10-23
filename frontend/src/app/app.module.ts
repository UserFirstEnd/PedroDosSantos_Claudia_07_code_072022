//module de demarrage

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './_error/error/error.component';
import { HttpClientModule } from '@angular/common/http';

//decoré avec ngModule
@NgModule({
  //les modules que l'on a besoin, on va declarer ici les composants
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  //et les modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  //la page sur laquelle on va demarer par default
  bootstrap: [AppComponent]
})
export class AppModule { }

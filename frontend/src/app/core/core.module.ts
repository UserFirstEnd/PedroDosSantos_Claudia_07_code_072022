import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../auth-form/token/token.interceptor';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,//il met à disposition les differents modules de l'application
    RouterModule,
    HttpClientModule,
  ],
  exports: [ //exports pour pouvoir s'en servir en dehors de ce component
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    TokenInterceptor//à revoir
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptorProvider } from './auth-form/token/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule, //imports pour pouvoir l'utiliser
    SharedModule//il met à disposition les differents modules de l'application. à voir si on a besoin !!! impoter plusieurs fois, ne double pas la taille du fichier. On a qu'une seule copie
],
  providers: [ TokenInterceptorProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }

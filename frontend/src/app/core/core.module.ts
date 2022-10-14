import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,//il met à disposition les differents modules de l'application
    RouterModule,
    HttpClientModule//pour faire les requetes http. Importé uniquement dans core.module, pas besoin de l'importer partout, car core module est aussi importé qu'une seule
  ],
  exports: [ //exports pour pouvoir s'en servir en dehors de ce component
    HeaderComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,//comments va utiliser materialModule
    ReactiveFormsModule
  ],
  exports: [//on l'exports dans shared, pour que n'importe quel module qui importe shared module, puisse aveoir acces
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

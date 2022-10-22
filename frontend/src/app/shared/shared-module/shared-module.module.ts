import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [//on l'exports dans shared, pour que n'importe quel module qui importe shared module, puisse avoir acces
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModuleModule { }

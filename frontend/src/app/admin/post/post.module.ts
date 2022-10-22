import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModuleModule
  ]
})
export class PostModule { }

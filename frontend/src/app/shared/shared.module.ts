import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../social-network/social-network.service';
import { PostListComponent } from '../social-network/components/post-list/post-list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [//on l'exports dans shared, pour que n'importe quel module qui importe shared module, puisse aveoir acces
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService,
    PostListComponent
  ]
})
export class SharedModule { }

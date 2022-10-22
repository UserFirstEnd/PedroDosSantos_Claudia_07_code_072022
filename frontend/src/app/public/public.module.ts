import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HomeComponent,
    CreatePostComponent,
    PublicHeaderComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModuleModule
  ]
})
export class PublicModule { }

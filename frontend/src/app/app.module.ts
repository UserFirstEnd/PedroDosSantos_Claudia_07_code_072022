import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

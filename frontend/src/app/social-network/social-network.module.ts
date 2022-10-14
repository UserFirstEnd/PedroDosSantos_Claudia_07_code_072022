import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkRoutingModule } from './social-network-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { NewPostListItemComponent } from './components/new-post-list-item/new-post-list-item.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    NewPostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialNetworkRoutingModule,
    SharedModule
  ],
  providers: [//revoir providers
    PostsService,//fera parti uniquement de social-network
    PostsResolver//fera parti uniquement de social-network
  ]
})
export class SocialNetworkModule { }

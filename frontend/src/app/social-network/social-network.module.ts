import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkRoutingModule } from './social-network-routing.module';
import { PostsService } from './social-network.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { NewPostListItemComponent } from './components/new-post-list-item/new-post-list-item.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


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
  providers: [
    PostsService,//fera parti uniquement de social-network
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    PostListComponent
  ]
})
export class SocialNetworkModule { }

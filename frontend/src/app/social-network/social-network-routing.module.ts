import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostListItemComponent } from './components/new-post-list-item/new-post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  { path: '', component: PostListComponent, resolve: { posts: PostsResolver } },
  { path: 'new-post', component: NewPostListItemComponent}//,
  //{ path: 'modify-post', component: NewPostListItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialNetworkRoutingModule { }

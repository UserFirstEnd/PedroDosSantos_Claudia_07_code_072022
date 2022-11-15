import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth-form/auth.guard';
import { NewPostListItemComponent } from '../components/new-post-list-item/new-post-list-item.component';
import { PostListComponent } from '../components/post-list/post-list.component';

const routes: Routes = [
  { path: 'admin', component: PostListComponent, canActivate: [AuthGuard]},
  { path: 'new-post', component: NewPostListItemComponent, canActivate: [AuthGuard]},
  { path: ':id', component: NewPostListItemComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

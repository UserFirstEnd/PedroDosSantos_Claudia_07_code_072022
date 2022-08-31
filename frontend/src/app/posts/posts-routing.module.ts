import { NgModule } from "@angular/core";
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { RouterModule, Routes } from "@angular/router";
import { NewPostComponent } from "./components/new-post/new-post.component";

const routes: Routes = [
    { path: 'new-post', component: NewPostComponent/*, canActivate: [AuthGuard] */},
    { path: ':id', component: SinglePostComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PostsRoutingModule {}
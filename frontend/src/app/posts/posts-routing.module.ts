import { NgModule } from "@angular/core";
import { PostListComponent } from "./components/post-list/post-list.component";
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { NewPostComponent } from "./components/new-post/new-post.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: ':id', component: SinglePostComponent},
    { path: '', component: PostListComponent },
    { path: 'create', component: NewPostComponent},
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
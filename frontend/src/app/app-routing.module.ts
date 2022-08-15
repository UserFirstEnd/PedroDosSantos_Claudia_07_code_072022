//module de routing pour SPA
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';//permet d'ajouter du routing
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PostListComponent } from "./post-list/post-list.component";
import { SinglePostComponent } from "./single-post/single-post.component";
import { NewPostComponent } from "./new-post/new-post.component";

/*Un module de routing contient un tableau de type  Routes  qui contient les routes de l'application.
Une route est un objet de type  { path: 'myPath', component: MyComponent }  qui spécifie 
le component à afficher pour chaque route.
On appelle  RouterModule.forRoot()  en passant le tableau de routes pour enregistrer les routes dans le routeur Angular.
On enregistre le module de routing dans AppModule pour ajouter le routeur configuré à l'application.
On ajoute une balise  <router-outlet>  pour dire à quel niveau du template le component de la route active doit être inséré.
Pour ajouter des fichiers statiques à une application (comme des images), on les stocke dans le dossier  assets  .*/

const routes: Routes = [ //nos deux routes
{ path: 'posts/:id', component: SinglePostComponent},
{ path: 'posts', component: PostListComponent },
{ path: 'create', component: NewPostComponent},
{ path: '', component: LandingPageComponent},
]

@NgModule({ //faut enregistrer la route sur le router et on ajoute un object de config
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
}) //pour que ce soit un module angumar : decorateur NgModule
export class AppRoutingModule {}
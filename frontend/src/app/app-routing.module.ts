//module de routing pour SPA
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';//permet d'ajouter du routing
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./core/services/auth-guard.service";
//import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

/*Un module de routing contient un tableau de type  Routes  qui contient les routes de l'application.
Une route est un objet de type  { path: 'myPath', component: MyComponent }  qui spécifie 
le component à afficher pour chaque route.
On appelle  RouterModule.forRoot()  en passant le tableau de routes pour enregistrer les routes dans le routeur Angular.
On enregistre le module de routing dans AppModule pour ajouter le routeur configuré à l'application.
On ajoute une balise  <router-outlet>  pour dire à quel niveau du template le component de la route active doit être inséré.
Pour ajouter des fichiers statiques à une application (comme des images), on les stocke dans le dossier  assets  .*/

const routes: Routes = [ //nos deux routes
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },//lazing module
]

@NgModule({ //faut enregistrer la route sur le router et on ajoute un object de config
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
}) //pour que ce soit un module angumar : decorateur NgModule
export class AppRoutingModule { }
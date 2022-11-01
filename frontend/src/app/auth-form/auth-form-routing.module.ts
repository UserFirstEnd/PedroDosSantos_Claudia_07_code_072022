import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupConnexionComponent } from './components/signup-connexion/signup-connexion.component';
import { UserConnexionComponent } from './components/user-connexion/user-connexion.component';

const routes: Routes = [
  { path: 'signup', component: SignupConnexionComponent },
  { path: 'connexion', component: UserConnexionComponent},
  { path: '**', component: UserConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthFormRoutingModule { }

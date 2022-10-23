import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConnexionComponent } from './components/user-connexion/user-connexion.component';

const routes: Routes = [
  { path: 'connexion', component: UserConnexionComponent},
  { path: '**', component: UserConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthFormRoutingModule { }

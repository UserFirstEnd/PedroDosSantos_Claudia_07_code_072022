import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'social-network', loadChildren: () => import('./social-network/social-network.module').then(m => m.SocialNetworkModule)}, //lazy loading pour charger socialnetworkmodule
  { path: 'connexion', loadChildren: () => import('./auth-form/auth-form.module').then(m => m.AuthFormModule)}, //lazy loading pour charger socialnetworkmodule
  { path: '**', redirectTo: 'connexion'} //route wild card, n'importe quelle route qui n'est pas connue, redirige vers connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

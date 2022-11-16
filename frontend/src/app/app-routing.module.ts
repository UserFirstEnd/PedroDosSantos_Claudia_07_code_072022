import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-form/auth.guard';
import { AuthGuardAdmin } from './auth-form/authAdmin.guard';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./social-network/components/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard, AuthGuardAdmin] }, //lazy loading pour charger adminmodule
  { path: 'posts', loadChildren: () => import('./social-network/social-network.module').then(m => m.SocialNetworkModule), canActivate: [AuthGuard] }, //lazy loading pour charger socialnetworkmodule
  { path: 'connexion', loadChildren: () => import('./auth-form/auth-form.module').then(m => m.AuthFormModule)}, //lazy loading pour charger authformmodule
  { path: '**', redirectTo: 'connexion'} //route wild card, n'importe quelle route qui n'est pas connue, redirige vers connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

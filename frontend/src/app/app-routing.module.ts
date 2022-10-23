import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './_auth/auth.guard';
import { ErrorComponent } from './_error/error/error.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},//on utile le lazyloading (on evite de chargé le navigateur), ce qui va faire que ce module (public) est chargé uniquement lorsqu'il est demandé
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard]},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthContainerComponent } from './auth.container';
import { AuthForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthSignInComponent } from './sign-in/sign-in.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: AuthSignInComponent, data: { title: 'Login' } },
      { path: 'forgot-password', component: AuthForgotPasswordComponent, data: { title: 'Olvidaste Contraseña' } },
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
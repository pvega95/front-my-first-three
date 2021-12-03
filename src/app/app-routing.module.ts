import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'content',
        loadChildren: () => import('./modules/content/content.module').then((m) => m.ContentModule),
      },
      {
        path: 'vocabulary',
        loadChildren: () => import('./modules/vocabulary/vocabulary.module').then((m) => m.VocabularyModule),
      },
      {
        path: 'notification',
        loadChildren: () => import('./modules/notification/notification.module').then((m) => m.NotificationModule),
      },
      {
        path: 'report',
        loadChildren: () => import('./modules/report/report.module').then((m) => m.ReportModule),
      },
    ]
  },
  // { path: '404', component: PageNotFoundComponent },
  // { path: 'not-authorized', component: PageNotAuthorizedComponent },
  // { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

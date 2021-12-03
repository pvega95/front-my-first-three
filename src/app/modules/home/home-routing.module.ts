import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home.container';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        data: { title: 'Home' },
        loadChildren: () => import('./overview/overview.module').then((m) => m.OverviewModule),
      }
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}

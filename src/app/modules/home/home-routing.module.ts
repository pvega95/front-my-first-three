import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home.container';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    // children: [
    //   {
    //     path: '',
    //     data: { title: 'Home' },
    //     loadChildren: () => import('./overview/overview.module').then((m) => m.OverviewModule),
    //   },
    //   {
    //     path: 'quarterly-bonus',
    //     data: { title: 'Bono trimestral' },
    //     loadChildren: () => import('./quarterly-bonus/quarterly-bonus.module').then((m) => m.QuarterlyBonusModule),
    //   },
    //   {
    //     path: 'salary-advance',
    //     data: { title: 'Avance de sueldo' },
    //     loadChildren: () => import('./salary-advance/salary-advance.module').then((m) => m.SalaryAdvanceModule),
    //   },
    //   {
    //     path: 'product-release/:id',
    //     loadChildren: () => import('./product-release/product-release.module').then((m) => m.ProductReleaseModule),
    //   },
    //   {
    //     path: 'sales-tool',
    //     loadChildren: () => import('./sales-tool/sales-tool.module').then((m) => m.SalesToolModule),
    //   },
    // ],
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

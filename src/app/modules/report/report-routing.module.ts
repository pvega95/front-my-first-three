import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { ReportListComponent } from './report-list/report-list.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      {
        path: '',
        data: { title: 'Listar Reporte' },
        component: ReportListComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class ReportRoutingModule { }
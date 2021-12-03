import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: NotificationComponent,
    children: [
      {
        path: '',
        data: { title: 'Listar Notificaciones' },
        component: NotificationListComponent,
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
export class NotificationRoutingModule { }
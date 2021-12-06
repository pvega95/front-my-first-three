import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { NotificationAddComponent } from './notification-add/notification-add.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationListComponent,
    NotificationAddComponent
  ],
  imports: [CommonModule, NotificationRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class NotificationModule {}

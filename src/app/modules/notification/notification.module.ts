import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent,
  ],
  imports: [CommonModule, NotificationRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class NotificationModule {}

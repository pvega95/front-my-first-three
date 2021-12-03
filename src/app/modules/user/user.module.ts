import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}

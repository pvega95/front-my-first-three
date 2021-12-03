import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [CommonModule, OverviewRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class OverviewModule {}

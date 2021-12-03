import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [
    ReportComponent,
  ],
  imports: [CommonModule, ReportRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class ReportModule {}

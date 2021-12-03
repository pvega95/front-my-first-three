import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent,
    ContentListComponent
  ],
  imports: [CommonModule, ContentRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class ContentModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { VocabularyComponent } from './vocabulary.component';

@NgModule({
  declarations: [
    VocabularyComponent,
  ],
  imports: [CommonModule, VocabularyRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class VocabularyModule {}

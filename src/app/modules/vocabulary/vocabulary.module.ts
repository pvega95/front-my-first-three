import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { VocabularyAddComponent } from './vocabulary-add/vocabulary-add.component';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { VocabularyComponent } from './vocabulary.component';

@NgModule({
  declarations: [
    VocabularyComponent,
    VocabularyListComponent,
    VocabularyAddComponent
  ],
  imports: [CommonModule, VocabularyRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class VocabularyModule {}

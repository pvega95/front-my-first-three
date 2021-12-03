import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { VocabularyComponent } from './vocabulary.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: VocabularyComponent,
    children: [
      {
        path: '',
        data: { title: 'Listar Vocabulario' },
        component: VocabularyListComponent,
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
export class VocabularyRoutingModule { }
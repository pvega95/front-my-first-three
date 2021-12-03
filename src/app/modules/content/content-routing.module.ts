import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentComponent } from './content.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        data: { title: 'Listar contenido' },
        component: ContentListComponent,
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
export class ContentRoutingModule { }
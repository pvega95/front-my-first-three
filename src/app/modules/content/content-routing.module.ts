import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentAddComponent } from './content-add/content-add.component';
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
      },
      {
        path: 'add',
        data: { title: 'Agregar contenido' },
        component: ContentAddComponent,
      },
      {
        path: 'add/:id',
        data: { title: 'Agregar/Editar contenido' },
        component: ContentAddComponent,
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
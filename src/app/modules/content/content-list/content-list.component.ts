import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContent } from '@shared/interfaces/content.interface';
import { CUSTOM_ROUTES } from '@src/app/config/const/routes';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-content-list-ui',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  listOfData: IContent[] = [
    {
      title: 'Titulo',
      author: 'Juan P.',
      status: 'Activo',
      type: 'Novela',
      updatedAt: new Date(),
    },
    {
      title: 'Titulo',
      author: 'Juan P.',
      status: 'Activo',
      type: 'Novela',
      updatedAt: new Date(),
    },
    {
      title: 'Titulo',
      author: 'Juan P.',
      status: 'Activo',
      type: 'Novela',
      updatedAt: new Date(),
    },
  ];
  constructor(
    private router : Router,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

  addContent() {
    this.router.navigate([CUSTOM_ROUTES.NEW_CONTENT]);
  }

  edit(contentID: string) {
    console.log('contentID', contentID)
    this.router.navigate([CUSTOM_ROUTES.NEW_CONTENT, contentID ]);
  }

  delete(id: string) {
    this.modal.confirm({
      nzTitle: '<i>Deseas eliminar este item?</i>',
      nzContent: '<b>No se podra recuperar</b>',
      nzOnOk: () => console.log('OK')
    });
  }

}
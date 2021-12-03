import { Component, OnInit } from '@angular/core';
import { IContent } from '@shared/interfaces/content.interface';

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
  constructor() { }

  ngOnInit(): void {
  }

}
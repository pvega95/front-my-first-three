import { Component, OnInit } from '@angular/core';
import { IVocabulary } from '@src/app/shared/interfaces/vocabulary.interface';

@Component({
  selector: 'app-vocabulary-list-ui',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.scss']
})
export class VocabularyListComponent implements OnInit {
  listOfData: IVocabulary[] = [
    {
      description: 'Idioma',
      status: 'Activo',
      name: 'Ingles',
    },
    {
      description: 'Idioma',
      status: 'Activo',
      name: 'Quechua',
    },
    {
      description: 'Idioma',
      status: 'Activo',
      name: 'Aymara',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
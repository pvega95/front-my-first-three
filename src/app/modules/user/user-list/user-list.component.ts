import { Component, OnInit } from '@angular/core';
import { IUser } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-user-list-ui',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  listOfData: IUser[] = [
    {
      email: 'jb@gmail.com',
      password: '*****',
      name: 'John Brown',
      url: 'https://picsum.photos/200/300'
    },
    {
      email: 'jg@gmail.com',
      password: '*****',
      name: 'Jim Green',
      url: 'https://picsum.photos/200/300'
    },
    {
      email: 'jb@gmail',
      password: '*****',
      name: 'Joe Black',
      url: 'https://picsum.photos/200/300'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
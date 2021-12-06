import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOM_ROUTES } from '@src/app/config/const/routes';
import { INotificationList } from '@src/app/shared/interfaces/notification.interface';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-notification-list-ui',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  listOfData: INotificationList[] = [
    {
      title: 'Bienvenidos Nuevo Usuarios',
      status: 'Activo',
    },
    {
      title: 'Quechua',
      status: 'Activo',
    }
  ];
  constructor(
    private router: Router,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

  addNotification(){
    this.router.navigate([CUSTOM_ROUTES.NEW_NOTIFICATION]);
  }

  edit(contentID: string) {
    console.log('contentID', contentID)
    this.router.navigate([CUSTOM_ROUTES.NEW_NOTIFICATION, contentID ]);
  }

  delete(id: string) {
    this.modal.confirm({
      nzTitle: '<i>Deseas eliminar este item?</i>',
      nzContent: '<b>No se podra recuperar</b>',
      nzOnOk: () => console.log('OK')
    });
  }

}
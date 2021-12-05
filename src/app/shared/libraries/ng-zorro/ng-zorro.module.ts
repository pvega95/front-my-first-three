import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Import what you need. RECOMMENDED. ✔️
import { HeartOutline, ShoppingOutline, ShoppingCartOutline, LikeOutline, DislikeOutline, LikeTwoTone, DislikeTwoTone, LockOutline, UserOutline, LogoutOutline, PlusOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ 
  HeartOutline,
  ShoppingOutline,
  ShoppingCartOutline,
  LikeOutline,
  DislikeOutline,
  LikeTwoTone,
  DislikeTwoTone,
  LockOutline,
  UserOutline,
  LogoutOutline,
  PlusOutline
];

const MODULES = [
  NzButtonModule,
  NzIconModule,
  NzGridModule,
  NzInputModule,
  NzPageHeaderModule,
  NzLayoutModule,
  NzBadgeModule,
  NzSliderModule,
  NzTagModule,
  NzDrawerModule,
  NzBackTopModule,
  NzBreadCrumbModule,
  NzAvatarModule,
  NzMessageModule,
  NzInputNumberModule,
  NzRateModule,
  NzDescriptionsModule,
  NzTableModule,
  NzCommentModule,
  NzListModule,
  NzFormModule,
  NzNotificationModule,
  NzSelectModule,
  NzTabsModule,
  NzCheckboxModule,
  NzCardModule,
  NzDropDownModule,
  NzDividerModule,
  NzModalModule
];

@NgModule({
  imports: [CommonModule, ...MODULES],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    
  ],
  exports: [...MODULES],
  declarations: [],
})
export class NgZorroModule { }
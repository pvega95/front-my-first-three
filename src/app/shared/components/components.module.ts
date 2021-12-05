import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from '../libraries/ng-zorro/ng-zorro.module';

@NgModule({
  declarations: [
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroModule
  ],
  exports: [
    BackButtonComponent
  ],
})
export class ComponentsModule {}

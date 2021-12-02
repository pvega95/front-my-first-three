import { NgModule } from '@angular/core';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';


@NgModule({
  imports: [NgZorroModule],
  exports: [NgZorroModule],
})
export class LibrariesModule {}

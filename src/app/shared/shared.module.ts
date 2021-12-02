import { NgModule } from '@angular/core';
import { LibrariesModule } from './libraries/libraries.module';

@NgModule({
  imports: [LibrariesModule],
  exports: [LibrariesModule],
})
export class SharedModule {}

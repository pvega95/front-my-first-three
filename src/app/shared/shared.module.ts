import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { LibrariesModule } from './libraries/libraries.module';

@NgModule({
  imports: [LibrariesModule,ComponentsModule],
  exports: [LibrariesModule,ComponentsModule],
})
export class SharedModule {}

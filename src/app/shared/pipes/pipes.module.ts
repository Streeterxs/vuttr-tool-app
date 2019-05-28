import { NgModule } from '@angular/core';

import { StringToolsFilterPipe } from './string-filter.pipe';

@NgModule({
  declarations: [
    StringToolsFilterPipe
  ],
  exports: [
    StringToolsFilterPipe
  ]
})
export class PipesModule { }

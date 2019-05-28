import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DebounceClickDirective],
  exports: [DebounceClickDirective]
})
export class SharedDirectivesModule { }

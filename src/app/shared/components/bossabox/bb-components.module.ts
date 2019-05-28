import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbButtonsComponent } from './bb-buttons/bb-buttons.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BbButtonsComponent    
  ],
  exports:[
    BbButtonsComponent    
  ]
})
export class BbComponentsModule { }

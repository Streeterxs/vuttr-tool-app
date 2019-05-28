import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VuttrHeaderComponent } from './vuttr-header/vuttr-header.component';
import { VuttrFooterComponent } from './vuttr-footer/vuttr-footer.component';
import { VuttrPageComponent } from './vuttr-page/vuttr-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VuttrFooterComponent,
    VuttrHeaderComponent,
    VuttrPageComponent
  ],
  exports: [
    VuttrPageComponent
  ]
})
export class TemplateModule { }

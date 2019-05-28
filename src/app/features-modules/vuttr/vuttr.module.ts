import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { VuttrRoutingModule } from './vuttr-routing.module';
import { VuttrComponent } from './vuttr.component';
import { BbComponentsModule } from '../../shared/components/bossabox/bb-components.module';
import { TemplateModule } from '../../shared/template/template.module';
import { VuttrFilterComponent } from './vuttr-filter/vuttr-filter.component';
import { VuttrToolsListComponent } from './vuttr-tools-list/vuttr-tools-list.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { VuttrToolRemoveComponent } from './vuttr-tools-management/vuttr-tool-remove/vuttr-tool-remove.component';
import { VuttrAddToolComponent } from './vuttr-tools-management/vuttr-add-tool/vuttr-add-tool.component';
import { VuttrRemoveConfirmationModalComponent } from './vuttr-tools-management/vuttr-tool-remove/remove-confirmation-modal/remove-confirmation-modal.component';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';
import { VuttrManagementService } from './vuttr-tools-management/vuttr-management.service';

@NgModule({
  imports: [
    CommonModule,
    VuttrRoutingModule,
    BbComponentsModule,
    TemplateModule,
    PipesModule,
    SharedDirectivesModule,
    ReactiveFormsModule
  ],
  declarations: [
    VuttrComponent,
    VuttrFilterComponent,
    VuttrToolsListComponent,
    VuttrToolRemoveComponent,
    VuttrAddToolComponent,
    VuttrRemoveConfirmationModalComponent
  ],
  exports: [
    VuttrComponent
  ],
  providers: [
    VuttrManagementService
  ]
})
export class VuttrModule { }

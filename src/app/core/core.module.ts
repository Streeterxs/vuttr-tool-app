import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ToolsService } from './services/tools/tools.service';
import { ToolsJsonParserService } from './services/tools/tools-json-parser.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ToolsService,
    ToolsJsonParserService
  ]
})
export class CoreModule { }

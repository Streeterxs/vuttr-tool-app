import { Component, OnInit } from '@angular/core';

import { ToolsService } from '../../core/services/tools/tools.service';
import { Tool } from '../../shared/interfaces/tools';
import { VuttrManagementService } from './vuttr-tools-management/vuttr-management.service';

@Component({
  selector: 'bb-app-vuttr',
  templateUrl: './vuttr.component.html',
  styleUrls: ['./vuttr.component.scss']
})
export class VuttrComponent implements OnInit {
  toolsForList: Tool[] = [];

  textToFilterTools;

  constructor(private _toolService: ToolsService, private _vuttrManagementService: VuttrManagementService) { }

  ngOnInit() {
    this.loadAllTools();
  }

  loadAllTools(){
    this._vuttrManagementService.subscribeSubjectInHttpGetToReturnToolList();
    this._vuttrManagementService.toolListSubject.subscribe(toolsList => {
      this.toolsForList = toolsList
    })
  }

  getTextEmittedToChangeToolList(event){
    if(event.checkIfIsTagSearch){
      this._toolService.getToolsTagSearchedFromJsonParser(event.textWrittedToSearch).subscribe(searchedToolList => {
        this._vuttrManagementService.toolList = searchedToolList;
        this._vuttrManagementService.toolListSubject.next(searchedToolList);
      });
    } else{
      this._toolService.getToolsSearchedFromJsonParser(event.textWrittedToSearch).subscribe(searchedToolList => {
        this._vuttrManagementService.toolList = searchedToolList;
        this._vuttrManagementService.toolListSubject.next(searchedToolList);
      });
    }
  }

  addButtonClick(event){
    this._vuttrManagementService.addButtonClicks.next(event.target.value);
  }
}

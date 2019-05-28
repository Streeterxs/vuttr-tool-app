import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject, BehaviorSubject } from 'rxjs';

import { Tool } from '../../../shared/interfaces/tools';
import { ToolsService } from '../../../core/services/tools/tools.service';


@Injectable()
export class VuttrManagementService {
  toolSubjectToRemove: Subject<Tool> = new Subject();
  addButtonClicks = new Subject();
  toolList: Tool[] = [];
  toolListSubject: BehaviorSubject<Tool[]> = new BehaviorSubject([]);

  constructor(private _toolsService: ToolsService) { }

  deleteSelectedTool(tool: Tool){
    this._toolsService.deleteTool(tool.getId).subscribe(() => {
      alert("Tool removed!");
      this.removeToolFromToolList(tool);
    }, err => alert("Couldn't remove tool "+err));
  }

  postNewToolFromFormAddSubmition(addForm: FormGroup){
    console.log(addForm);
    this._toolsService.postToolAndGet(new Tool(
      addForm.value.toolName,
      addForm.value.toolLink,
      addForm.value.toolDesc,
      addForm.value.tags
    )).subscribe(tool=>{
      alert("New tool has been added!");
      console.log(tool);
      this.toolList.push(tool);
      this.toolListSubject.next(this.toolList);
      addForm.reset();
    })
  }

  subscribeSubjectInHttpGetToReturnToolList(){
    this._toolsService.getAllToolsFromJsonParser().subscribe(toolList => {
      this.toolList = toolList;
      this.toolListSubject.next(this.toolList);
    })
  }

  removeToolFromToolList(tool: Tool){
    const index = this.toolList.indexOf(tool, 0);
    if (index > -1){
      this.toolList.splice(index, 1);
      this.toolListSubject.next(this.toolList);
    }
  }
}

import { Component, OnInit, Input} from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Tool } from '../../../../shared/interfaces/tools';
import { ToolsService } from '../../../../core/services/tools/tools.service';
import { VuttrManagementService } from '../vuttr-management.service';

@Component({
  selector: 'bb-vuttr-tool-remove',
  templateUrl: './vuttr-tool-remove.component.html',
  styleUrls: ['./vuttr-tool-remove.component.scss']
})
export class VuttrToolRemoveComponent implements OnInit {

  @Input() tool: Tool;

  toolRemoveSubject: Subject<Tool> = new Subject();

  constructor(private _vuttrManagementService: VuttrManagementService) { }

  ngOnInit() {
  }

  toolRemoverFunction(){
    this._vuttrManagementService.toolSubjectToRemove.next(this.tool);    
  }
}

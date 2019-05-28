import { Component, OnInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import { Tool } from '../../../../../shared/interfaces/tools';
import { VuttrManagementService } from '../../vuttr-management.service';

declare var $:any;

@Component({
  selector: 'bb-remove-confirmation-modal',
  templateUrl: './remove-confirmation-modal.component.html',
  styleUrls: ['./remove-confirmation-modal.component.scss']
})
export class VuttrRemoveConfirmationModalComponent implements OnInit, OnDestroy {
  @ViewChild('removeModal') modal: ElementRef;

  @Input() toolSubjectToRemove: Subject<Tool>

  tool: Tool;

  subscriptionToolSubjectToRemove: Subscription;

  constructor(private _vuttrManagementService: VuttrManagementService) { }

  ngOnInit() {
    this.subscriptionToolSubjectToRemove = this._vuttrManagementService.toolSubjectToRemove.subscribe(tool => {
      this.tool = tool;
      $(this.modal.nativeElement).modal("show")
    })
  }

  ngOnDestroy() {
    this.subscriptionToolSubjectToRemove.unsubscribe()
  }

  cancelToolRemotion(){
    $(this.modal.nativeElement).modal("hide")
  }

  removeTool(){
    $(this.modal.nativeElement).modal("hide");
    this._vuttrManagementService.deleteSelectedTool(this.tool);
  }
}

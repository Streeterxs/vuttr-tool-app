import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { VuttrManagementService } from '../vuttr-management.service';

declare var $:any;

@Component({
  selector: 'bb-vuttr-add-tool',
  templateUrl: './vuttr-add-tool.component.html',
  styleUrls: ['./vuttr-add-tool.component.scss']
})
export class VuttrAddToolComponent implements OnInit {
  
  
  @ViewChild('addModal') modal: ElementRef;

  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  addForm: FormGroup;

  constructor(
    private _vuttrManagementService: VuttrManagementService,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createAddFormGroup();
    this._vuttrManagementService.addButtonClicks.subscribe(() => {
      $(this.modal.nativeElement).modal("show");      
    })
  }

  private createAddFormGroup() {
    this.addForm = this._formBuilder.group({
      toolName: ['', Validators.required],
      toolLink: ['', Validators.compose([Validators.required, Validators.pattern(this.urlRegex)])],
      toolDesc: [''],
      tags: this._formBuilder.array([
        this._formBuilder.control('')
      ])
    });
  }

  get tags() {
    return this.addForm.get('tags') as FormArray;
  }

  addNewTag(){
    this.tags.push(this._formBuilder.control(''));
  }

  formSubmit(){
    console.log(this.addForm.status);
    /*
    this._vuttrManagementService.postNewToolFromFormAddSubmition(this.addForm);
    $(this.modal.nativeElement).modal("hide");
    */
  }

  removeLastTag(){
    this.tags.removeAt(this.tags.length-1);
  }
}

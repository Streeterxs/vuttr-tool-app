import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'bb-button',
  templateUrl: './bb-buttons.component.html',
  styleUrls: ['./bb-buttons.component.scss']
})
export class BbButtonsComponent implements OnInit {

  @Input() cssClasses: string;
  @Input() disabled: boolean; 

  constructor() { }

  ngOnInit() {
  }

}

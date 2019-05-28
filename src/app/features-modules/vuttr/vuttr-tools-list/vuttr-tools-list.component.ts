import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bb-vuttr-tools-list',
  templateUrl: './vuttr-tools-list.component.html',
  styleUrls: ['./vuttr-tools-list.component.scss']
})
export class VuttrToolsListComponent implements OnInit {


  @Input() toolsForList = [];
  @Input() textToFilterTools;

  constructor() { }

  ngOnInit() {
  }
}

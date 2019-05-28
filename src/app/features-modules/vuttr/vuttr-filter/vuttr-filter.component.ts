import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'bb-vuttr-filter',
  templateUrl: './vuttr-filter.component.html',
  styleUrls: ['./vuttr-filter.component.scss']
})
export class VuttrFilterComponent implements OnInit, OnDestroy {
  writtedTextToSearchSubject: Subject<string> = new Subject();
  searchOnlyForTagsSubject: Subject<boolean> = new Subject();

  subscriptionTextToToolSearch;
  subscriptionCheckboxToToolSearch;

  writtedTextToEmit: string = "";
  searchOnlyForTagsBooleanToEmit: boolean;  

  @Output() emitTextToSearch: EventEmitter<Object> = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.subscriptionTextToToolSearch = this.writtedTextToSearchSubject.pipe(debounceTime(300)).subscribe(key => {
      this.writtedTextToEmit = key;
      this.emitSearchObject();
    })

    this.subscriptionCheckboxToToolSearch = this.searchOnlyForTagsSubject.pipe(debounceTime(300)).subscribe(isCheckedForTagSearch => {
      this.searchOnlyForTagsBooleanToEmit = isCheckedForTagSearch;
      this.emitSearchObject();
    })
  }

  ngOnDestroy() {
    this.subscriptionTextToToolSearch.unsubscribe();
    this.subscriptionCheckboxToToolSearch.unsubscribe();
  }

  writtedTextToSubscribe(event){
    this.writtedTextToSearchSubject.next(event.target.value);
  }

  testEvent(event){
    this.searchOnlyForTagsSubject.next(event.target.checked);
  }

  emitSearchObject(){
    this.emitTextToSearch.emit({textWrittedToSearch: this.writtedTextToEmit, checkIfIsTagSearch: this.searchOnlyForTagsBooleanToEmit});
  }
}

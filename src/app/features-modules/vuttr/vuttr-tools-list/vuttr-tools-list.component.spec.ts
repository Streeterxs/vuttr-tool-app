import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrToolsListComponent } from './vuttr-tools-list.component';

describe('VuttrToolsListComponent', () => {
  let component: VuttrToolsListComponent;
  let fixture: ComponentFixture<VuttrToolsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrToolsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

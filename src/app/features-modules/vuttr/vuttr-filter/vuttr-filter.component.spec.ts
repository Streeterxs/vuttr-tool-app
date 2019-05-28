import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrFilterComponent } from './vuttr-filter.component';

describe('VuttrFilterComponent', () => {
  let component: VuttrFilterComponent;
  let fixture: ComponentFixture<VuttrFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

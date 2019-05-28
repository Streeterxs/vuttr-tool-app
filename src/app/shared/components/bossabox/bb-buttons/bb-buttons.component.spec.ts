import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbButtonsComponent } from './bb-buttons.component';

describe('BbButtonsComponent', () => {
  let component: BbButtonsComponent;
  let fixture: ComponentFixture<BbButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

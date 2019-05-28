import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrComponent } from './vuttr.component';

describe('VuttrComponent', () => {
  let component: VuttrComponent;
  let fixture: ComponentFixture<VuttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

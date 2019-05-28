import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrHeaderComponent } from './vuttr-header.component';

describe('VuttrHeaderComponent', () => {
  let component: VuttrHeaderComponent;
  let fixture: ComponentFixture<VuttrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

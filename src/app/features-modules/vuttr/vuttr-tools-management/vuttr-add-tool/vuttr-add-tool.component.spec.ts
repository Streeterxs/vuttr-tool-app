import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrAddToolComponent } from './vuttr-add-tool.component';

describe('VuttrAddToolComponent', () => {
  let component: VuttrAddToolComponent;
  let fixture: ComponentFixture<VuttrAddToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrAddToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrAddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

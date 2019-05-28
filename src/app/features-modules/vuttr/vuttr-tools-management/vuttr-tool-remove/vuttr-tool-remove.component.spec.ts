import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrToolRemoveComponent } from './vuttr-tool-remove.component';

describe('VuttrToolRemoveComponent', () => {
  let component: VuttrToolRemoveComponent;
  let fixture: ComponentFixture<VuttrToolRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrToolRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrToolRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

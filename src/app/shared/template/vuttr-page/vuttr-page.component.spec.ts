import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrPageComponent } from './vuttr-page.component';

describe('VuttrPageComponent', () => {
  let component: VuttrPageComponent;
  let fixture: ComponentFixture<VuttrPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

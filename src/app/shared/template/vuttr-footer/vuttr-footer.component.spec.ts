import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuttrFooterComponent } from './vuttr-footer.component';

describe('VuttrFooterComponent', () => {
  let component: VuttrFooterComponent;
  let fixture: ComponentFixture<VuttrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuttrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuttrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

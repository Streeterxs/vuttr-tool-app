import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveConfirmationModalComponent } from './remove-confirmation-modal.component';

describe('RemoveConfirmationModalComponent', () => {
  let component: RemoveConfirmationModalComponent;
  let fixture: ComponentFixture<RemoveConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinEditComponent } from './pin-edit.component';

describe('PinEditComponent', () => {
  let component: PinEditComponent;
  let fixture: ComponentFixture<PinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

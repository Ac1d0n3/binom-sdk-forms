import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPhoneInputComponent } from './bn-phone-input.component';

describe('BnPhoneInputComponent', () => {
  let component: BnPhoneInputComponent;
  let fixture: ComponentFixture<BnPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPhoneInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

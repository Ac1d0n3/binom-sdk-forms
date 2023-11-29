import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPhoneInputsComponent } from './demo-phone-inputs.component';

describe('DemoPhoneInputsComponent', () => {
  let component: DemoPhoneInputsComponent;
  let fixture: ComponentFixture<DemoPhoneInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPhoneInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoPhoneInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

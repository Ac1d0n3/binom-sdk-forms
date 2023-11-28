import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnCounterButtonComponent } from './bn-counter-button.component';

describe('BnCounterButtonComponent', () => {
  let component: BnCounterButtonComponent;
  let fixture: ComponentFixture<BnCounterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnCounterButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnCounterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

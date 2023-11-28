import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnAbcButtonsComponent } from './bn-abc-buttons.component';

describe('BnAbcButtonsComponent', () => {
  let component: BnAbcButtonsComponent;
  let fixture: ComponentFixture<BnAbcButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnAbcButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnAbcButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

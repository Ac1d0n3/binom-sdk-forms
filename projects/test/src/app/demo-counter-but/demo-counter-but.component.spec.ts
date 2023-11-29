import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCounterButComponent } from './demo-counter-but.component';

describe('DemoCounterButComponent', () => {
  let component: DemoCounterButComponent;
  let fixture: ComponentFixture<DemoCounterButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCounterButComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoCounterButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

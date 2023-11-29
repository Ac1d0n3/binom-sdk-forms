import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAbcComponent } from './demo-abc.component';

describe('DemoAbcComponent', () => {
  let component: DemoAbcComponent;
  let fixture: ComponentFixture<DemoAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAbcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

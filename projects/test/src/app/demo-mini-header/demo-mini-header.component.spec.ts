import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMiniHeaderComponent } from './demo-mini-header.component';

describe('DemoMiniHeaderComponent', () => {
  let component: DemoMiniHeaderComponent;
  let fixture: ComponentFixture<DemoMiniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoMiniHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoMiniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSetMoveComponent } from './demo-set-move.component';

describe('DemoSetMoveComponent', () => {
  let component: DemoSetMoveComponent;
  let fixture: ComponentFixture<DemoSetMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoSetMoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoSetMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

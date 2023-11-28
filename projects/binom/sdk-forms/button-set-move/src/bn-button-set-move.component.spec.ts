import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnButtonSetMoveComponent } from './bn-button-set-move.component';

describe('BnButtonSetMoveComponent', () => {
  let component: BnButtonSetMoveComponent;
  let fixture: ComponentFixture<BnButtonSetMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnButtonSetMoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnButtonSetMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

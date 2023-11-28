import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnMiniHeaderComponent } from './bn-mini-header.component';

describe('BnMiniHeaderComponent', () => {
  let component: BnMiniHeaderComponent;
  let fixture: ComponentFixture<BnMiniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnMiniHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnMiniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

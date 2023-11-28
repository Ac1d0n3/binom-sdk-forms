import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnButtonSetSortComponent } from './bn-button-set-sort.component';

describe('BnButtonSetSortComponent', () => {
  let component: BnButtonSetSortComponent;
  let fixture: ComponentFixture<BnButtonSetSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnButtonSetSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnButtonSetSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

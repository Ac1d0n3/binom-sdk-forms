import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSortMenuComponent } from './bn-sort-menu.component';

describe('BnSortMenuComponent', () => {
  let component: BnSortMenuComponent;
  let fixture: ComponentFixture<BnSortMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSortMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSortMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPickListComponent } from './bn-pick-list.component';

describe('BnPickListComponent', () => {
  let component: BnPickListComponent;
  let fixture: ComponentFixture<BnPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPickListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

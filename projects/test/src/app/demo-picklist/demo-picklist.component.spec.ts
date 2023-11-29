import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPicklistComponent } from './demo-picklist.component';

describe('DemoPicklistComponent', () => {
  let component: DemoPicklistComponent;
  let fixture: ComponentFixture<DemoPicklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPicklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

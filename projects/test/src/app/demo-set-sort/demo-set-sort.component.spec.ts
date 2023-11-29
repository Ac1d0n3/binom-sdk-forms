import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSetSortComponent } from './demo-set-sort.component';

describe('DemoSetSortComponent', () => {
  let component: DemoSetSortComponent;
  let fixture: ComponentFixture<DemoSetSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoSetSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoSetSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

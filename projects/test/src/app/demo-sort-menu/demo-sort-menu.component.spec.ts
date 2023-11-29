import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSortMenuComponent } from './demo-sort-menu.component';

describe('DemoSortMenuComponent', () => {
  let component: DemoSortMenuComponent;
  let fixture: ComponentFixture<DemoSortMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoSortMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoSortMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

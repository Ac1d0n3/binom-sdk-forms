import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormErComponent } from './demo-form-er.component';

describe('DemoFormErComponent', () => {
  let component: DemoFormErComponent;
  let fixture: ComponentFixture<DemoFormErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFormErComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoFormErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

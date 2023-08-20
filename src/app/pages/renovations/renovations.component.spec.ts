import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationsComponent } from './renovations.component';

describe('RenovationsComponent', () => {
  let component: RenovationsComponent;
  let fixture: ComponentFixture<RenovationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenovationsComponent]
    });
    fixture = TestBed.createComponent(RenovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

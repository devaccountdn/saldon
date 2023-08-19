import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePage1Component } from './sale-page1.component';

describe('SalePage1Component', () => {
  let component: SalePage1Component;
  let fixture: ComponentFixture<SalePage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalePage1Component]
    });
    fixture = TestBed.createComponent(SalePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

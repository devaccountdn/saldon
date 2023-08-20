import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResourceInfoComponent } from './about-resource-info.component';

describe('AboutResourceInfoComponent', () => {
  let component: AboutResourceInfoComponent;
  let fixture: ComponentFixture<AboutResourceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutResourceInfoComponent]
    });
    fixture = TestBed.createComponent(AboutResourceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCountComponent } from './car-count.component';

describe('CarCountComponent', () => {
  let component: CarCountComponent;
  let fixture: ComponentFixture<CarCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCountComponent]
    });
    fixture = TestBed.createComponent(CarCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

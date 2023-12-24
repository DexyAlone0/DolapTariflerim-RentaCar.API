import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeProductsComponent } from './fridge-products.component';

describe('FridgeProductsComponent', () => {
  let component: FridgeProductsComponent;
  let fixture: ComponentFixture<FridgeProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FridgeProductsComponent]
    });
    fixture = TestBed.createComponent(FridgeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

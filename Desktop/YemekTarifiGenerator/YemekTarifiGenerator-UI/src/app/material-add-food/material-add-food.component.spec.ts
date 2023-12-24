import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAddFoodComponent } from './material-add-food.component';

describe('MaterialAddFoodComponent', () => {
  let component: MaterialAddFoodComponent;
  let fixture: ComponentFixture<MaterialAddFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialAddFoodComponent]
    });
    fixture = TestBed.createComponent(MaterialAddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

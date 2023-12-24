import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YemekTarifiComponent } from './yemek-tarifi.component';

describe('YemekTarifiComponent', () => {
  let component: YemekTarifiComponent;
  let fixture: ComponentFixture<YemekTarifiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YemekTarifiComponent]
    });
    fixture = TestBed.createComponent(YemekTarifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

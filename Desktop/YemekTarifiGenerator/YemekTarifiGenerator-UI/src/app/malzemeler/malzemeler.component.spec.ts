import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalzemelerComponent } from './malzemeler.component';

describe('MalzemelerComponent', () => {
  let component: MalzemelerComponent;
  let fixture: ComponentFixture<MalzemelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MalzemelerComponent]
    });
    fixture = TestBed.createComponent(MalzemelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

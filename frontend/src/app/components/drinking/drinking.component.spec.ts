import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingComponent } from './drinking.component';

describe('DrinkingComponent', () => {
  let component: DrinkingComponent;
  let fixture: ComponentFixture<DrinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

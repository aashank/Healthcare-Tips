import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDietComponent } from './daily-diet.component';

describe('DailyDietComponent', () => {
  let component: DailyDietComponent;
  let fixture: ComponentFixture<DailyDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

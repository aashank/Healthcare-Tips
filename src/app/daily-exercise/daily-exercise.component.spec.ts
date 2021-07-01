import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExerciseComponent } from './daily-exercise.component';

describe('DailyExerciseComponent', () => {
  let component: DailyExerciseComponent;
  let fixture: ComponentFixture<DailyExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

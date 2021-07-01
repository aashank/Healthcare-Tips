import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGuideComponent } from './covid-guide.component';

describe('CovidGuideComponent', () => {
  let component: CovidGuideComponent;
  let fixture: ComponentFixture<CovidGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

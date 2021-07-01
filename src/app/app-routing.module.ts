import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';
import { DailyDietComponent } from './daily-diet/daily-diet.component';
import { DailyExerciseComponent } from './daily-exercise/daily-exercise.component';
import { CovidGuideComponent } from './covid-guide/covid-guide.component';
import { WellnessComponent } from './wellness/wellness.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'bmi',component:BmiComponent},
  {path:'diet',component:DailyDietComponent},
  {path:'exercise',component:DailyExerciseComponent},
  {path:'covid',component:CovidGuideComponent},
  {path:'wellness',component:WellnessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';
import { DailyDietComponent } from './daily-diet/daily-diet.component';
import { DailyExerciseComponent } from './daily-exercise/daily-exercise.component';

import { PageContentComponent } from './page-content/page-content.component';
import { CovidGuideComponent } from './covid-guide/covid-guide.component';
import { CardContentComponent } from './card-content/card-content.component';
import { WellnessComponent } from './wellness/wellness.component';
import { FooterComponent } from './footer/footer.component';
import { BackToHomeComponent } from './back-to-home/back-to-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BmiComponent,
    DailyDietComponent,
    DailyExerciseComponent,
 
    PageContentComponent,
      CovidGuideComponent,
      CardContentComponent,
      WellnessComponent,
      FooterComponent,
      BackToHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

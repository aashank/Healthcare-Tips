import { Component, OnInit } from '@angular/core';
import exerciseJson from './exercise.model';
@Component({
  selector: 'app-daily-exercise',
  templateUrl: './daily-exercise.component.html',
  styleUrls: ['./daily-exercise.component.css']
})
export class DailyExerciseComponent implements OnInit {
  accordianDetails:any=[]
  constructor() { }

  ngOnInit(): void {
    this.accordianDetails=exerciseJson;
    
  }

}

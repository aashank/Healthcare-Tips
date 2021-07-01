import { Component, OnInit } from '@angular/core';
import dietJson from './diet.model';
@Component({
  selector: 'app-daily-diet',
  templateUrl: './daily-diet.component.html',
  styleUrls: ['./daily-diet.component.css']
})
export class DailyDietComponent implements OnInit {

  constructor() { }
  accordianDetails: any = [];
  ngOnInit(): void {
    this.accordianDetails = dietJson;
    // console.log(this.accordianDetails);
  }

}

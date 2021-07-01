import { Component, OnInit } from '@angular/core';
import covidJson from './covid.model';
@Component({
  selector: 'app-covid-guide',
  templateUrl: './covid-guide.component.html',
  styleUrls: ['./covid-guide.component.css']
})
export class CovidGuideComponent implements OnInit {
  accordianDetails: any = []
  constructor() { }

  ngOnInit(): void {
    this.accordianDetails = covidJson;
  }

}

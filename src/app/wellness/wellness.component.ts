import { Component, OnInit } from '@angular/core';
import wellnessJson from './wellness.model';
@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css']
})
export class WellnessComponent implements OnInit {
  constructor() { }
  cardDetails:any=[];
  ngOnInit(): void {
    this.cardDetails=wellnessJson
  }

}

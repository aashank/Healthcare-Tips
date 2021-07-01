import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  public weight: number = 0;
  public height: number = 0;
  public bmiValue: number = 0;
  ngOnInit() {
  }

  showBmiValue() {
    const calculatedHeight = this.height * 12 * 0.025;
    this.bmiValue = this.weight / (Math.pow(calculatedHeight, 2));
    this.bmiValue = Math.round(this.bmiValue);
  }


}

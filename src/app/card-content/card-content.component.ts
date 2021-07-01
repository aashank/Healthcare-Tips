import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() cardImg: string = "";
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClickEnrollNow() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
    else {
      this.isCollapsed = true;
    }
  }
}

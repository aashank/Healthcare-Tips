import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
@Input() accordianTitle:string="";
@Input() accordianDescription:string="";
@Input() accordianId:string="";
isCollapsed:boolean=false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isCollapsed);
  }
  toggleAccordian(){
    if(this.isCollapsed){
      this.isCollapsed=false;
    }
    else{
      this.isCollapsed=true;
    }
  }
}

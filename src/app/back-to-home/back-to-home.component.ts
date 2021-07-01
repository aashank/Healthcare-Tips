import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-back-to-home',
  templateUrl: './back-to-home.component.html',
  styleUrls: ['./back-to-home.component.css']
})
export class BackToHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigate(['/']);
  }

}

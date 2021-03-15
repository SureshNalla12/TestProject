import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any;
  constructor() { 
    this.userData = JSON.parse(localStorage.getItem('UserInfo'));
  }

  ngOnInit(): void {
  }
  clearcache() {
    localStorage.removeItem("UserInfo");
  }
}

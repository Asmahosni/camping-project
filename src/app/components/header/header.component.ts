import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userRole : string ;
  userFirstName : string ;
  userLastName : string ;
  constructor(private router : Router) { }
  ngOnInit(): void {
    this.userRole = localStorage.getItem('connectedUserRole');
    this.userFirstName = localStorage.getItem('connectedUserFName');
    this.userLastName = localStorage.getItem('connectedUserLName');
  }
}

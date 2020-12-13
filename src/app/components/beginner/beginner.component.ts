import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  goToCenter(){
    this.route.navigate(['centers'])
  }
}

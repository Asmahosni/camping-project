import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-one-center',
  templateUrl: './popular-one-center.component.html',
  styleUrls: ['./popular-one-center.component.css']
})
export class PopularOneCenterComponent implements OnInit {
  @Input() x:any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToCenter(id :string){
    this.router.navigate([`singleCenter/${id}`]);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() c : any ;
  constructor() { }

  ngOnInit(): void {
  }

}

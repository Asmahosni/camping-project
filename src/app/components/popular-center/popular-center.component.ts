import { Component, Input, OnInit } from '@angular/core';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-popular-center',
  templateUrl: './popular-center.component.html',
  styleUrls: ['./popular-center.component.css']
})
export class PopularCenterComponent implements OnInit {
  centers : any;
  constructor(private centerService : CenterService) { }

  ngOnInit(): void {
    this.getAllCenters();
  }
  getAllCenters(){
   this.centerService.getAllCenters().subscribe(
     (data) => {
       this.centers = data.centers;
     } 
   )
  }
}

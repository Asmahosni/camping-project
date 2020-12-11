import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {
  centers : any ;
  constructor(
    private centerService : CenterService,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllCenters();
  }
  getAllCenters(){
    this.centerService.getAllCenters().subscribe(
      data => {
        this.centers = data.centers;
      })
  }
  
}

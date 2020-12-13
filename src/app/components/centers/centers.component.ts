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
  centers: any;
  northCenters: any=[];
  centerCenters: any=[];
  capBonCenters: any=[];
  southCenters: any=[];
  constructor(
    private centerService: CenterService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllCenters();
    this.classifyCenters();
  }
  getAllCenters() {
    this.centerService.getAllCenters().subscribe(
      data => {
        this.centers = data.centers;
        
      })
  }
  classifyCenters() {
    for (let i = 0; i < this.centers.length; i++) {
      switch (this.centers[i].region) {
        case 'nothern':
          this.northCenters.append(this.centers[i])
          break;
        case 'center':
          this.centerCenters.append(this.centers[i])
          break;
        case 'capBon':
          this.capBonCenters.append(this.centers[i])
          break;
        case 'southern':
          this.southCenters.append(this.centers[i])
          break;
      }
    }
    console.log('centerCenters',this.centerCenters);
    
  }
}

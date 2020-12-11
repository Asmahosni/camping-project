import { Component, OnInit } from '@angular/core';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  centers : any ;
  constructor(private centerService:CenterService) { }

  ngOnInit(): void {
    this.centerService.getAllCenters().subscribe(
      (data) =>{
        this.centers = data.centers
      }
    )
  }

}

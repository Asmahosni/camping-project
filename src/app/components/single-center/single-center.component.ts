import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-single-center',
  templateUrl: './single-center.component.html',
  styleUrls: ['./single-center.component.css']
})
export class SingleCenterComponent implements OnInit {
  center : any ;
  id : any ;
  constructor(private activated:ActivatedRoute,private centerService :CenterService) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.centerService.getCenterById(this.id).subscribe(
      data =>{
        this.center = data.center;
        console.log('get center ',data.center);
      })
    
  }

}

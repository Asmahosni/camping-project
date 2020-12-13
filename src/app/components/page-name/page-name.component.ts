import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-name',
  templateUrl: './page-name.component.html',
  styleUrls: ['./page-name.component.css']
})
export class PageNameComponent implements OnInit {
  name : any ;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.url[0].path;
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-centers-admin',
  templateUrl: './centers-admin.component.html',
  styleUrls: ['./centers-admin.component.css']
})
export class CentersAdminComponent implements OnInit {
  centers : any ;
  addCenterForm : FormGroup;
  imagePreview : any ;
  constructor(
    private centerService : CenterService,
    private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllCenters();
    this.addCenterForm = this.formBuilder.group({
      name : [''],
      location : [''],
      phone : [''],
      description : [''],
      email : [''],
      socialMedia: [''],
      rate : [''],
      image : ['']
    })
  }
  getAllCenters(){
    this.centerService.getAllCenters().subscribe(
      data => {
        this.centers = data.centers;
      })
  }
  addCenter(center : any){
    console.log('center', center);
    this.centerService.addCenter(center , this.addCenterForm.value.image).subscribe(
      () => {
        console.log('user added successfully',center);
        this.getAllCenters();
      }
    ) 
  }
  editCenter(id){
    this.router.navigate([`admin/edit-center/${id}`]);
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addCenterForm.patchValue({ image : file });
    this.addCenterForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  deleteCenter(id:string){
    this.centerService.deleteCenter(id).subscribe(
      ()=>{
        console.log('center deleted successfully');
        this.getAllCenters() ;    
      }
    )
  } 
}
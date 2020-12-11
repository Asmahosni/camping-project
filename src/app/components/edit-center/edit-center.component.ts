import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-edit-center',
  templateUrl: './edit-center.component.html',
  styleUrls: ['./edit-center.component.css']
})
export class EditCenterComponent implements OnInit {
  editCenterForm : FormGroup;
  id : any;
  center : any={} ;
  imagePreview : any ;
  constructor(
    private activated : ActivatedRoute,
    private formBuilder : FormBuilder,
    private router : Router,
    private centerService : CenterService
    ) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.getCenter();
    this.editCenterForm = this.formBuilder.group({
      name : [''],
      location : [''],
      phone : [''],
      description : [''],
      email : [''],
      socialMedia: [''],
      rate : ['']
    })
  }
  getCenter(){
    this.centerService.getCenterById(this.id).subscribe(
      data =>{
        this.center = data.center;
        console.log('get center ',data.center);
      })
      
      
  }
  editCenter(){
    console.log('here my edited  center',this.center);
    
    this.centerService.editCenter(this.center).subscribe(
      ()=>{
        this.router.navigate(['admin/centers-admin']);
      }
    )
  };
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editCenterForm.patchValue({ image : file });
    this.editCenterForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}

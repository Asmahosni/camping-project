import { UpperCasePipe } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup ;
  imagePreview : any ;
  constructor(private formBuilder : FormBuilder,
    private userService:UserService,
    private router : Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      phone : [''],
      email : [''],
      password : [''],
      cPasssword: [''],
      image : ['']
    })
  }
  signup(user:any){
    this.userService.signup(user, this.signupForm.value.image).subscribe(
      () => {
        console.log('user added successfully',user);
        this.router.navigate(['login'])
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ image : file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}

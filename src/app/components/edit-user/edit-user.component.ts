import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm : FormGroup;
  id : any;
  user: any={} ;
  imagePreview : any ;
  constructor(
    private activated : ActivatedRoute,
    private formBuilder : FormBuilder,
    private router : Router,
    private userService : UserService
    ) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.getUser();
    this.editUserForm = this.formBuilder.group({
      firstName : [''],
      lastName: [''],
      phone : [''],
      email : [''],
      password: ['']
    })
  }
  getUser(){
    this.userService.getUserById(this.id).subscribe(
      data =>{
        this.user = data.user;
        console.log('get user ',data.user);
      })
  }
  editUser(){
    console.log('here my edited  center',this.user); 
    this.userService.editUser(this.user).subscribe(
      ()=>{
        this.router.navigate(['admin/users-admin']);
      }
    )
  };
}

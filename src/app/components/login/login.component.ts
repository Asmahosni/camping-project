import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup ;
  role: string;
  constructor(private formBuilder : FormBuilder,
    private userService:UserService,
    private router : Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password : ['']
    })
  }
  
  login(user : any){
    this.userService.login(user).subscribe(
      data => {
        console.log("here data",data.user[0]);
        location.reload();
        localStorage.setItem('connectedUserFName',data.user[0].firstName);
        localStorage.setItem('connectedUserLName',data.user[0].lastName);
        if ((user.email.split('@',2))[1].toLowerCase()=='tuni-camp.org') {
          
          localStorage.setItem('connectedUserRole','admin');
        }else{
          localStorage.setItem('connectedUserRole','simpleUser');
        }
      }
    )
    this.role=localStorage.getItem('connectedUserRole')
    switch (this.role) {
      case 'admin':
        this.router.navigate(['admin'])
        break;
      case 'simpleUser': this.router.navigate([''])
        break;
    }
  }

}

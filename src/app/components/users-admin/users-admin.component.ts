import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  users : any ;
  imagePreview : any ;
  constructor(
    private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data.users;
      })
  }
  editUser(id){
    this.router.navigate([`admin/edit-user/${id}`]);
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe(
      ()=>{
        console.log('center deleted successfully');
        this.getAllUsers() ;    
      }
    )
  } 

}

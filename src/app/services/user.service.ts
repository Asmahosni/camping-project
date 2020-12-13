import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl ="http://localhost:3000";
  constructor(private httpClient : HttpClient) { }
  getAllUsers(){
    return this.httpClient.get<{message : string , users : any}>(`${this.userUrl}/allUsers`);
  }
  signup(user: any , image :File ){
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('password', user.password);
    formData.append('cPassword', user.cPassword);
    formData.append('image', image);
    return this.httpClient.post(`${this.userUrl}/addUser`,formData)
  };
  getUserById(id:string){
    return this.httpClient.get<{user: any}>(`${this.userUrl}/getUser/${id}`);
  }
  deleteUser(id : string){
    return this.httpClient.delete(`${this.userUrl}/deleteUser/${id}`);
  }
  editUser(user : any){
    return this.httpClient.put(`${this.userUrl}/editUser/${user._id}`,user);
  }
  login(user : any){
    console.log('user in service', user);
    
    return this.httpClient.post<{user : any}>(`${this.userUrl}/login`,user)
  }
}

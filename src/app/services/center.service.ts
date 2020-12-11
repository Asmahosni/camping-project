import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  centerUrl ="http://localhost:3000";
  constructor(private httpClient : HttpClient) { }
  getAllCenters(){
    return this.httpClient.get<{message : string , centers : any}>(`${this.centerUrl}/allCenters`);
  }
  addCenter(center: any , image :File ){
    let formData = new FormData();
    formData.append('name', center.name);
    formData.append('description', center.description);
    formData.append('email', center.email);
    formData.append('location', center.location);
    formData.append('phone', center.phone);
    formData.append('rate', center.rate);
    formData.append('socialMedia', center.socialMedia);
    formData.append('image', image);
    return this.httpClient.post(`${this.centerUrl}/addCenter`,formData)
  };
  getCenterById(id:string){
    return this.httpClient.get<{center: any}>(`${this.centerUrl}/getCenter/${id}`);
  }
  deleteCenter(id : string){
    return this.httpClient.delete(`${this.centerUrl}/deleteCenter/${id}`);
  }
  editCenter(center : any){
    return this.httpClient.put(`${this.centerUrl}/editCenter/${center._id}`,center);
  }
  searchCenter(term : any){
    return this.httpClient.get<{searchedcenteres:any}>(`${this.centerUrl}/api/search/${term}`)
  }
}

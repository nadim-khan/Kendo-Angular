
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private api = environment.restApi;
  constructor( private http:HttpClient) { }

  updateBreadCrumb(route:string){
   alert(route)
   return route;
  }

  getAllUsers(){
    return this.http.get(`${this.api}/users`);
  }

  getAllProducts(){
    return this.http.get(`${this.api}/products`);
  }
}

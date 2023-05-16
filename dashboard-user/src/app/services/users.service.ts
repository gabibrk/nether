import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export const jsonplaceholderUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUserAlbums(id:number):Observable<any> {
    return this.http.get(jsonplaceholderUrl+"/posts?userId="+id)
  }
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(jsonplaceholderUrl+"/users")
  }
  
  //TODO
}

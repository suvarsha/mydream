import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8890/users'; 
  constructor(private http:HttpClient) { }
  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllUser');
  }
  saveUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrl+'/postuser',user)
  }
  updateUser(id:String):Observable<object>{
    return this.http.put(this.baseUrl+'/putuser/${id}',id);
  }
  deleteUser(id:String):boolean{
   this.http.delete(this.baseUrl+'deleteUser/${id}',{responseType:'json'});
   return true;
  }

}

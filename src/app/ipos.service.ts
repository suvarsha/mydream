import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipos } from './ipos';

@Injectable({
  providedIn: 'root'
})
export class IposService {
  private baseUrl = 'http://localhost:8890/ipos'; 
 
  constructor(private http:HttpClient) { }
  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllipos');''
  }
  savestock(stock:Ipos):Observable<Ipos>{
    return this.http.post<Ipos>(this.baseUrl+'/saveipos',stock)
  }
  updatestock(id:number):Observable<object>{
    return this.http.put(this.baseUrl+'/putipos/{id}',id);
  }
  deletestock(id:number):boolean{
   this.http.delete(this.baseUrl+'/deleteipos/{id}',{responseType:'json'});
   return true;
  }
}

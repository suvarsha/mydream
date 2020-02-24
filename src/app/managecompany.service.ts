import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Managecompany } from './managecompany';


@Injectable({
  providedIn: 'root'
})
export class ManagecompanyService {

 
  private baseUrl = 'http://localhost:8890/company'; 
  constructor(private http:HttpClient) { }
  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllcompanydata');''
  }
  savestock(stock:Managecompany):Observable<Managecompany>{
    return this.http.post<Managecompany>(this.baseUrl+'/savecompanydata',stock)
  }
  updatestock(stockCode:String):Observable<object>{
    return this.http.put(this.baseUrl+'/putcompanydata/${stockCode}',stockCode);
  }
  deletestock(stockCode:String):boolean{
   this.http.delete(this.baseUrl+'deletecompanycode/${stockCode}',{responseType:'json'});
   return true;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from './sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8894/sector'; 
  constructor(private http:HttpClient) { }
  getAllsector():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllsector');
  }
  savesector(stock:Sector):Observable<Sector>{
    return this.http.post<Sector>(this.baseUrl+'/saveSector',stock)
  }
  updatesector(id:String):Observable<object>{
    return this.http.put(this.baseUrl+'/putsector/{id}',id);
  }
  deletesector(id:number):Observable<object>{
   return this.http.delete(this.baseUrl+'/deletesector/'+id);
 
  }
  findOneInAll(id:String):Observable<any>{
    return this.http.get(this.baseUrl+'/findsector/'+id);
      }



}

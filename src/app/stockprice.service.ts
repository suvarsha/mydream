import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private baseUrl = 'http://localhost:8890/stockprice'; 
  constructor(private http:HttpClient) { }

  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllStock');
  }
  saveUser(price:Stockprice):Observable<Stockprice>{
    return this.http.post<Stockprice>(this.baseUrl+'/saveStock',price)
  }
}

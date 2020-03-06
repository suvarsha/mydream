import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockexchange } from './stockexchange';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8892/stockExchange';
  constructor(private http:HttpClient) { }
  getAllstockExchange():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllStockExchange');''
  }
  savestockExchange(stock:Stockexchange):Observable<Stockexchange>{
    return this.http.post<Stockexchange>(this.baseUrl+'/saveStockExchange',stock)
  }
  updatestockExchange(id:String):Observable<object>{
    return this.http.put(this.baseUrl+'/putstockExchange/{id}',id);
  }
  deletestockExchange(id:String):Observable<object>{
   return this.http.delete(this.baseUrl+'/deletestockExchange/'+id);
  
  }
  findOneInAll(id:String):Observable<any>{
    return this.http.get(this.baseUrl+'/findstockExchange/'+id);}


}

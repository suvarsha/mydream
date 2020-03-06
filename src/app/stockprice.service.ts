import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private baseUrl = 'http://localhost:8896/stockprice/stockprice'; 
  constructor(private http:HttpClient) { }

  getAllPrice():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllStock');
  }
  savePrice(price:Stockprice):Observable<Stockprice>{
    return this.http.post<Stockprice>(this.baseUrl+'/saveStock',price)
  }
  deletePrice(stockExchange:String):Observable<object>{
    return this.http.delete(this.baseUrl+'/deletestock/'+stockExchange);
 
   }
   updatePrice(stockExchange:String):Observable<object>{
    return this.http.put(this.baseUrl+'/putstock/',stockExchange);
  }
  findOneInAll(stockExchange:String):Observable<any>{
    return this.http.get(this.baseUrl+'/findstock/'+stockExchange);
      }
}

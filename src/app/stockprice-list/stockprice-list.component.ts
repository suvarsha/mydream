import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Observable } from 'rxjs';
import { Stockprice } from '../stockprice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockprice-list',
  templateUrl: './stockprice-list.component.html',
  styleUrls: ['./stockprice-list.component.css']
})
export class StockpriceListComponent implements OnInit {

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }
  stockPrice:Observable<any[]>;
  ngOnInit() {
    this.stockpriceservice.getAllPrice().subscribe(data =>{  
      this.stockPrice =data
  });
};
deleteStock(price:Stockprice){
  this.stockpriceservice.deletePrice(price.stockExchange).subscribe(data=>{
    alert(price.stockExchange)
    this.stockpriceservice.getAllPrice().subscribe(data=>{
      this.stockPrice=data;
    });
  });
}
updateStock(price:Stockprice){
  window.localStorage.removeItem("edit-stockexchange");
  window.localStorage.setItem("edit-stockexchange", price.stockExchange.toString());


  this.router.navigate(['stockprice']);
  
}
}



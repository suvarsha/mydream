import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Observable } from 'rxjs';
import { Stockexchange } from '../stockexchange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private router:Router,private exchangeservice:StockexchangeService) { }
  stockList:Observable<any[]>;
  ngOnInit() {
    this.exchangeservice.getAllstockExchange().subscribe(data =>{  
      this.stockList =data
  });
}

deleteStock(exchange:Stockexchange){
  this.exchangeservice.deletestockExchange(exchange.id).subscribe(data=>{
    this.exchangeservice.getAllstockExchange().subscribe(data=>{
      this.stockList=data;
    });
  });
}

updateStock(exchange:Stockexchange){
  window.localStorage.removeItem("edit-stockid");
  window.localStorage.setItem("edit-stockid", exchange.id.toString());

  this.router.navigate(['stockexchange']);
  
}
}

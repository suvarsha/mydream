import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private exchangeservice:StockexchangeService) { }
  stockList:Observable<any[]>;
  ngOnInit() {
    this.exchangeservice.getAllstockExchange().subscribe(data =>{  
      this.stockList =data
  });
  

}
}

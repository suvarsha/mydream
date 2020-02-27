import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  constructor(private stockprice:StockpriceService) { }
  price : Stockprice=new Stockprice();
  submitted = false; 
  ngOnInit() {
    this.submitted = false; 
  }
  stockPriceform=new FormGroup({
      companyCode: new FormControl('',[Validators.required,Validators.minLength(5)]),
      stockExchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
      currentPrice:new FormControl('',[Validators.required,Validators.minLength(5)]),
      date:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

}

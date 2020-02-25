import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Stockexchange } from '../stockexchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  constructor(private stockservice:StockexchangeService) { }
  exchange : Stockexchange=new Stockexchange();
  submitted = false; 
  ngOnInit() {
    this.submitted = false;
  }
  exchangeSaveForm=new FormGroup({
exchange_id:new FormControl('',[Validators.required,Validators.minLength(5)]),
stock_ex:new FormControl('',[Validators.required,Validators.minLength(5)]),
brief:new FormControl('',[Validators.required,Validators.minLength(5)]),
contact_Address:new FormControl('',[Validators.required,Validators.minLength(5)]),
remarks:new FormControl('',[Validators.required,Validators.minLength(5)]),
    
  });
  saveExchange(saveExchange){
    this.exchange=this.exchange;
    this.exchange.id=this.exchangeSaveForm.get('exchange_id').value;
    this.exchange.stockEx=this.exchangeSaveForm.get('stock_ex').value;
    this.exchange.brief=this.exchangeSaveForm.get('brief').value;
    this.exchange.contactAddress=this.exchangeSaveForm.get('contact_Address').value;
    this.exchange.remarks=this.exchangeSaveForm.get('remarks').value;

    this.submitted=true;
    this.save();
}
save()
{
this.stockservice.savestockExchange(this.exchange).subscribe(data=>console.log(data),error=>console.log(error));
this .exchange=new Stockexchange();
}


}

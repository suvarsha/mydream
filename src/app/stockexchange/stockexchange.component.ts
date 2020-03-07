import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Stockexchange } from '../stockexchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  constructor(private router:Router,private stockservice:StockexchangeService) { }
  exchange : Stockexchange=new Stockexchange();
  submitted = false; 
  ngOnInit() {
    var id= window.localStorage.getItem("edit-stockExchange");

    if(id!==null&&id!="")
    {

      this.stockservice.findOneInAll(id)
    .subscribe(data => { this.exchange =data;
      this.exchangeSaveForm.setValue(this.exchange);
    });
    this.submitted=false;
  }
  }
  exchangeSaveForm=new FormGroup({
id:new FormControl('',[Validators.required,Validators.minLength(5)]),
stockExchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
brief:new FormControl('',[Validators.required,Validators.minLength(5)]),
contactAddress:new FormControl('',[Validators.required,Validators.minLength(5)]),
remarks:new FormControl('',[Validators.required,Validators.minLength(5)]),
    
  });
  saveExchange(saveExchange){
    this.exchange=this.exchange;
    this.exchange.id=this.exchangeSaveForm.get('id').value;
    this.exchange.stockExchange=this.exchangeSaveForm.get('stockExchange').value;
    this.exchange.brief=this.exchangeSaveForm.get('brief').value;
    this.exchange.contactAddress=this.exchangeSaveForm.get('contactAddress').value;
    this.exchange.remarks=this.exchangeSaveForm.get('remarks').value;

    this.submitted=true;
    this.save();
}
save()
{
this.stockservice.savestockExchange(this.exchange).subscribe(data=>console.log(data),error=>console.log(error));
this .exchange=new Stockexchange();
window.localStorage.removeItem("edit-stockExchange");
alert("updated successfully")
this.router.navigate(['home']);
}
usersaveForm(){
  this.submitted=false;
  this.exchangeSaveForm.reset();
  
  }


}

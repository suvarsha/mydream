import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { time } from 'highcharts';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
  selectedFiles: any;

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }
  price : Stockprice=new Stockprice();
  submitted = false; 
  message:String="CREATE STOCKPRICE";
  ngOnInit() {
    var id= window.localStorage.getItem("edit-stockexchange");

    if(id!==null&&id!="")
    {
      this.message="UPDATE STOCKPRICE";
      this.stockpriceservice.findOneInAll(id)
    .subscribe(data => { this.price =data;
      this.stockPriceform.setValue(this.price);
    });
  
    this.submitted = false; 
  }
}
selectFile(event) {  
  const file = event.target.files.item(0);  
 
  if (file.type.match('*')) {  
    var size = event.target.files[0].size;  
    if(size > 1000000)  
    {  
        alert("size must not exceeds 1 MB");  
        this.stockPriceform.get('uploadFile').setValue("");  
    }  
    else  
    {  
      this.selectedFiles = event.target.files;  
    }  
  } else {  
    alert('invalid format!');  
  }  

}     

  stockPriceform=new FormGroup({
      companyCode: new FormControl('',[Validators.required,Validators.minLength(3)]),
      
      stockExchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
      currentPrice:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      time:new FormControl(),
      uploadFile:new FormControl()
  });
  saveStockprice(saveStockprice)
  {
    if(this.stockPriceform.invalid){
      alert("invalid");
    }else{
    this.price=new Stockprice();
    this.price.companyCode=this.stockPriceform.get('companyCode').value;
    this.price.stockExchange=this.stockPriceform.get('stockExchange').value;
    this.price.currentPrice=this.stockPriceform.get('currentPrice').value;
    this.price.date=this.stockPriceform.get('date').value;
    this.price.time=this.stockPriceform.get('time').value;
    this.price.uploadFile=this.stockPriceform.get('uploadFile').value;
    this.submitted=true;
    this.save();
    }
  }
  save()
{
this.stockpriceservice.savePrice(this.price).subscribe(data=>console.log(data),error=>console.log(error));
this .price=new Stockprice();

window.localStorage.removeItem("edit-stockexchange");
  alert("updated successfully")
  this.router.navigate(['home']);
}
stockPriceForm(){
  this.submitted=false;
  this.stockPriceform.reset();
  
  }


}

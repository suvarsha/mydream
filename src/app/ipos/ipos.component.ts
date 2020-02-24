import { Component, OnInit } from '@angular/core';
import { Ipos } from '../ipos';
import { IposService } from '../ipos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  constructor(private iposservice:IposService) { }
  ipos : Ipos=new Ipos();
  submitted=false;

  ngOnInit() {
    this.submitted=false;
  }
  iposaveform=new FormGroup({
    ipos_id:new FormControl('',[Validators.required,Validators.minLength(5)]),
    company_Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    stock_Exchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
    price_per_share:new FormControl('',[Validators.required,Validators.minLength(5)]),
    total_no_of_share:new FormControl('',[Validators.required,Validators.minLength(5)]),
    date:new FormControl('',[Validators.required]),
    remarks:new FormControl('',[Validators.required,Validators.minLength(5)])
})
saveipos(saveipos)
{
  this.ipos=this.ipos;
  this.ipos.id=this.iposaveform.get('ipos_id').value;
  this.ipos.companyName=this.iposaveform.get('company_Name').value;
  this.ipos.stockExchange=this.iposaveform.get('stock_Exchange').value;
  this.ipos.pricePerShare=this.iposaveform.get('price_per_share').value;
  this.ipos.totalNoOfShare=this.iposaveform.get('total_no_of_share').value;
  this.ipos.openDateTime=this.iposaveform.get('date').value;
  this.ipos.remarks=this.iposaveform.get('remarks').value;
  this.submitted=true;
  this.save();
}
save()
{
  this.iposservice.savestock(this.ipos).subscribe(data=>console.log(data),error=>console.log(error));
  this .ipos=new Ipos();
}

}

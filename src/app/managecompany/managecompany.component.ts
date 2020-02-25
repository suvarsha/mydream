import { Component, OnInit } from '@angular/core';
import { ManagecompanyService } from '../managecompany.service';
import { Managecompany } from '../managecompany';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {

  constructor(private manageservice:ManagecompanyService) { }
  company : Managecompany=new Managecompany();
  submitted=false;
 ngOnInit() {

  var stockcode=window.localStorage.getItem("edit-stockCode");
  alert(stockcode);
this.manageservice.findOneInAll(stockcode)
    .subscribe(data => { this.company =data;
      alert(this.company.stockCode)

      this.companysaveform.setValue(this.company);

     }) ;
  this.submitted=false;
  }
  companysaveform=new FormGroup({
    stock_code:new FormControl('',[Validators.required,Validators.minLength(5)]),
    company_name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    turn_over:new FormControl('',[Validators.required,Validators.minLength(5)]),
    ceo:new FormControl('',[Validators.required,Validators.minLength(5)]),
    board_of_directories:new FormControl('',[Validators.required,Validators.minLength(5)]),
    brief:new FormControl('',[Validators.required]),
    list_of_stock_exchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
    sector:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
savecompanydata(savecompanydata){
  this.company=this.company;
  this.company.companyName=this.companysaveform.get('company_name').value;
  this.company.stockCode=this.companysaveform.get('stock_code').value;
  this.company.turnOver=this.companysaveform.get('turn_over').value;
  this.company.ceo=this.companysaveform.get('ceo').value;
  this.company.boardOfDirectories=this.companysaveform.get('board_of_directories').value;
  this.company.listOfStockExchange=this.companysaveform.get('list_of_stock_exchange').value;
  this.company.sector=this.companysaveform.get('sector').value;
  this.company.brief=this.companysaveform.get('brief').value;
  this.submitted=true;
  this.save(); 

}
save()
{
  this.manageservice.savestock(this.company).subscribe(data=>console.log(data),error=>console.log(error));
  this .company=new Managecompany();
}
}
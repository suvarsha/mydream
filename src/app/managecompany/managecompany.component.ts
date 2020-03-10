import { Component, OnInit } from '@angular/core';
import { ManagecompanyService } from '../managecompany.service';
import { Managecompany } from '../managecompany';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {

  constructor(private router: Router,private manageservice:ManagecompanyService) { }
  company : Managecompany=new Managecompany();
  submitted=false;
  message:String="CREATE COMPANY";
 ngOnInit() {

  var stockcode=window.localStorage.getItem("edit-stockCode");
 
  if(stockcode!=null&&stockcode!=""){
    this.message="UPDATE COMPANY";
this.manageservice.findOneInAll(stockcode)
    .subscribe(data => { this.company =data;
     

      this.companysaveform.setValue(this.company);

     }) ;
    }
  this.submitted=false;

}
  companysaveform=new FormGroup({
    stockCode:new FormControl('',[Validators.required,Validators.minLength(5)]),
    companyName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    turnOver:new FormControl('',[Validators.required,Validators.minLength(5)]),
    ceo:new FormControl('',[Validators.required,Validators.minLength(5)]),
    boardOfDirectories:new FormControl('',[Validators.required,Validators.minLength(5)]),
    brief:new FormControl('',[Validators.required]),
    listOfStockExchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
    sector:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
savecompanydata(savecompanydata){
  this.company=this.company;
  this.company.companyName=this.companysaveform.get('companyName').value;
  this.company.stockCode=this.companysaveform.get('stockCode').value;
  this.company.turnOver=this.companysaveform.get('turnOver').value;
  this.company.ceo=this.companysaveform.get('ceo').value;
  this.company.boardOfDirectories=this.companysaveform.get('boardOfDirectories').value;
  this.company.listOfStockExchange=this.companysaveform.get('listOfStockExchange').value;
  this.company.sector=this.companysaveform.get('sector').value;
  this.company.brief=this.companysaveform.get('brief').value;
  this.submitted=true;
  this.save(); 

}
save()
{
  this.manageservice.savestock(this.company).subscribe(data=>console.log(data),error=>console.log(error));
  

  this .company=new Managecompany();
  window.localStorage.removeItem("edit-stockCode");
  alert("updated successfully")
  this.router.navigate(['home']);
  
  
}
companysaveForm(){
this.submitted=false;
this.companysaveform.reset();

}
}
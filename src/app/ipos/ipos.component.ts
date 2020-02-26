import { Component, OnInit } from '@angular/core';
import { Ipos } from '../ipos';
import { IposService } from '../ipos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  constructor(private router:Router,private iposservice:IposService) { }
  ipos : Ipos=new Ipos();
  submitted=false;

  ngOnInit() {
    var id= window.localStorage.getItem("edit-id");
    if(id!==null&&id!="")
    {
      this.iposservice.findOneInAll(id)
    .subscribe(data => { this.ipos =data;
      this.iposaveform.setValue(this.ipos);
    });
    this.submitted=false;
    }

    this.submitted=false;
  }
  iposaveform=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.minLength(5)]),
    companyName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    stockExchange:new FormControl('',[Validators.required,Validators.minLength(5)]),
    pricePerShare:new FormControl('',[Validators.required,Validators.minLength(5)]),
    totalNoOfShare:new FormControl('',[Validators.required,Validators.minLength(5)]),
    openDateTime:new FormControl('',[Validators.required]),
    remarks:new FormControl('',[Validators.required,Validators.minLength(5)])
})
saveipos(saveipos)
{
  this.ipos=this.ipos;
  this.ipos.id=this.iposaveform.get('id').value;
  this.ipos.companyName=this.iposaveform.get('companyName').value;
  this.ipos.stockExchange=this.iposaveform.get('stockExchange').value;
  this.ipos.pricePerShare=this.iposaveform.get('pricePerShare').value;
  this.ipos.totalNoOfShare=this.iposaveform.get('totalNoOfShare').value;
  this.ipos.openDateTime=this.iposaveform.get('openDateTime').value;
  this.ipos.remarks=this.iposaveform.get('remarks').value;
  this.submitted=true;
  this.save();
}
save()
{
  this.iposservice.saveIpo(this.ipos).subscribe(data=>console.log(data),error=>console.log(error));
  this .ipos=new Ipos();
  window.localStorage.removeItem("edit-id");
  alert("updated successfully")
  this.router.navigate(['home']);
}
iposaveForm(){
  this.submitted=false;
  this.iposaveform.reset();
  
  }


}

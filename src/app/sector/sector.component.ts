import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private router:Router,private sectorservice:SectorService) { }
  sector: Sector=new Sector();
  submitted = false; 
  ngOnInit() {
    this.submitted = false; 
    var id= window.localStorage.getItem("edit-sectorid");

    if(id!==null&&id!="")
    {
      this.sectorservice.findOneInAll(id)
    .subscribe(data => { this.sector =data;
      this.sectorSaveForm.setValue(this.sector);
    });
    this.submitted=false;
  }
  }
sectorSaveForm=new FormGroup({
  id:new FormControl('',[Validators.required,Validators.minLength(5)]),
  sectorName:new FormControl('',[Validators.required,Validators.minLength(5)]),
  brief:new FormControl('',[Validators.required,Validators.minLength(5)])
});
savesector(){
  this.sector=this.sector;
  this.sector.id=this.sectorSaveForm.get('id').value;
  this.sector.sectorName=this.sectorSaveForm.get('sectorName').value;
  this.sector.brief=this.sectorSaveForm.get('brief').value;
  this.submitted=true;
       this.save();
}
save()
{
  this.sectorservice.savesector(this.sector).subscribe(data=>console.log(data),error=>console.log(error));
  this .sector=new Sector;
  window.localStorage.removeItem("edit-sectorid");
  alert("updated successfully")
  this.router.navigate(['home']);
}
usersaveForm(){
  this.submitted=false;
  this.sectorSaveForm.reset();
  
  }




}

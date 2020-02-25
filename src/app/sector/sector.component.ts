import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private sectorservice:SectorService) { }
  sector: Sector=new Sector();
  submitted = false; 
  ngOnInit() {
    this.submitted = false; 
  }
sectorSaveForm=new FormGroup({
  sector_id:new FormControl('',[Validators.required,Validators.minLength(5)]),
  sector_Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
  brief:new FormControl('',[Validators.required,Validators.minLength(5)])
});
savesector(){
  this.sector=this.sector;
  this.sector.id=this.sectorSaveForm.get('sector_id').value;
  this.sector.sectorName=this.sectorSaveForm.get('sector_Name').value;
  this.sector.brief=this.sectorSaveForm.get('brief').value;
  this.submitted=true;
       this.save();
}
save()
{
  this.sectorservice.savesector(this.sector).subscribe(data=>console.log(data),error=>console.log(error));
  this .sector=new Sector;
}




}

import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { Sector } from '../sector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  constructor(private router: Router,private sectorservice:SectorService) { }
  sectorList:Observable<any[]>;
  ngOnInit() {

    this.sectorservice.getAllsector().subscribe(data =>{  
      this.sectorList =data
  });
}

deleteSector(sector:Sector){
  this.sectorservice.deletesector(sector.id).subscribe(data=>{
    this.sectorservice.getAllsector().subscribe(data=>{
      this.sectorList=data;
    });
  });
}
updateSector(sector:Sector){
  window.localStorage.removeItem("edit-sectorid");
  window.localStorage.setItem("edit-sectorid", sector.id.toString());
  this.router.navigate(['sector']);
  
}

}

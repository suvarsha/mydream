import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  constructor(private sectorservice:SectorService) { }
  sectorList:Observable<any[]>;
  ngOnInit() {

    this.sectorservice.getAllsector().subscribe(data =>{  
      this.sectorList =data
  });
}

}

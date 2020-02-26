import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';
import { Observable } from 'rxjs';
import { Ipos } from '../ipos';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {

  constructor(private iposervice:IposService) { }
ipoList:Observable<any[]>;
  ngOnInit() {
    this.iposervice.getAllIpo().subscribe(data=>{
      this.ipoList=data;
    })
  }
  deleteIpo(ipo:Ipos){
    this.iposervice.deleteIpo(ipo.id).subscribe(data=>{
      this.iposervice.getAllIpo().subscribe(data=>{
        this.ipoList=data;
      });
    });
  }
  

}

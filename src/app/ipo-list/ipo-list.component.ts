import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {

  constructor(private iposervice:IposService) { }
ipoList:Observable<any[]>;
  ngOnInit() {
    this.iposervice.getAllUser().subscribe(data=>{
      this.ipoList=data;
    })
  }

}

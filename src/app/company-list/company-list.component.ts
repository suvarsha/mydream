import { Component, OnInit } from '@angular/core';
import { ManagecompanyService } from '../managecompany.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private companyservice:ManagecompanyService) { }
companyList:Observable<any[]>;
  ngOnInit() {
    this.companyservice.getAllUser().subscribe(data=>{
      this.companyList=data;
    })
  }

}

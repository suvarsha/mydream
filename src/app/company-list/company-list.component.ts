import { Component, OnInit } from '@angular/core';
import { ManagecompanyService } from '../managecompany.service';
import { Observable } from 'rxjs';
import { Managecompany } from '../managecompany';
import {Router} from "@angular/router";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  

  constructor(private router: Router,private companyservice:ManagecompanyService) { }
companyList:Observable<any[]>;
  ngOnInit() {
    this.companyservice.getAllUser().subscribe(data=>{
      this.companyList=data;
    });
  }
  deleteCompany(company:Managecompany)
  {
    this.companyservice.deleteStock(company.stockCode).subscribe(data=>{
    this.companyservice.getAllUser().subscribe(data=>{
      this.companyList=data;
    });
  });

}
updateCompany(company:Managecompany){
  window.localStorage.removeItem("edit-stockCode");
  window.localStorage.setItem("edit-stockCode", company.stockCode.toString());
  this.router.navigate(['managecompany']);
  
}

}
  

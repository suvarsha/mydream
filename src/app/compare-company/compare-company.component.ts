import { Component, OnInit,ViewChild,

  ElementRef,
 
  AfterViewInit,
 
  OnDestroy,
 
  ChangeDetectorRef, } from '@angular/core';
 
 
 import { Router } from '@angular/router';
 
 
 import { Observable } from 'rxjs/internal/Observable';
 
 import { Stockprice } from 'src/app/stockprice';
 

 
 import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
 
 
 
 import { of } from 'rxjs';
 
 import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
 import * as Highcharts from 'highcharts';
import { Managecompany } from '../managecompany';
import { Sector } from '../sector';
import { ManagecompanyService } from '../managecompany.service';
import { SectorService } from '../sector.service';
import { StockpriceService } from '../stockprice.service';
import { HighchartsService } from './Highcharts.service';
 
 @Component({
 
  selector: 'app-compare-company',
 
  templateUrl: './compare-company.component.html',
 
  styleUrls: ['./compare-company.component.css']
 
 })
 export class CompareCompanyComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;

  myGroup: FormGroup;
 constructor(private hcs: HighchartsService,
    private formBuilder: FormBuilder,
    private router:Router,
    private manageservice:ManagecompanyService,
    private sectorservice: SectorService,
    private stockpriceservice:StockpriceService) { }
  companyList:Managecompany[];
  companyListAll: Managecompany;
  sectorsList: Sector[];
  stockpriceList: Observable<Stockprice[]>;
  ngOnInit() {
   this.hcs.createChart(this.chartEl.nativeElement);
   this.myGroup= this.formBuilder.group({
    "choose": new FormControl([ Validators.required ]),
    "sectorName": new FormControl([ Validators.required ]),
    "companyName": new FormControl([ Validators.required ]),
    "fromdate":new FormControl([ Validators.required ]),
    "todate":new FormControl([ Validators.required ])
    })
   this.manageservice.getAllUser().subscribe(data => {
    this.companyList = data;
    this.companyListAll=data;
    this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;
    })
    this.stockpriceservice.getAllPrice().subscribe(data => {
    this.stockpriceList = data;
    })
    this.sectorservice.getAllsector().subscribe(data => {
     this.sectorsList = data;
     })
 }
  sectorChange()
  {
  alert(1234);
  var sectorValue=this.myGroup.controls['sectorName'].value;
 this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;
  }
 
 }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ImportComponent } from './import/import.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { IposComponent } from './ipos/ipos.component';
import { IpoListComponent } from './ipo-list/ipo-list.component';
import { SectorComponent } from './sector/sector.component';
import { SectorListComponent } from './sector-list/sector-list.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NavigationbarComponent,
    ImportComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    UserListComponent,
    ManagecompanyComponent,
    CompanyListComponent,
    IposComponent,
    IpoListComponent,
    SectorComponent,
    SectorListComponent,
    StockexchangeComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'navigationbar',
        component:NavigationbarComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'signup',
        component:SignupComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'admin',
        component:AdminComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'user',
        component:UserComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'import',
        component:ImportComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'user-List',
        component:UserListComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'managecompany',
        component:ManagecompanyComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'company-list',
        component:CompanyListComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'ipos',
        component:IposComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'ipo-list',
        component:IpoListComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'sector',
        component:SectorComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'sector-list',
        component:SectorListComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'stockexchange',
        component:StockexchangeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'stock-list',
        component:StockListComponent
      }
    ])



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

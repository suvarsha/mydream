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
    IposComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

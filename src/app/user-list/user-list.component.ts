import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }
  userList:Observable<any[]>;
  
  ngOnInit() {
    this.userservice.getAllUser().subscribe(data =>{  
      this.userList =data
    });
     
  }
  deleteUser(user:User){
    this.userservice.deleteUser(user.id).subscribe(data=>{
      this.userservice.getAllUser().subscribe(data=>{
        this.userList=data;
      });
    });
  }
  updateUser(company:User){
    window.localStorage.removeItem("edit-userid");
    window.localStorage.setItem("edit-userid", company.id.toString());

    this.router.navigate(['signup']);
    
  }

}

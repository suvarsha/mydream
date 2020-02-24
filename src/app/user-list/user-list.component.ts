import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userservice:UserService) { }
  userList:Observable<any[]>;
  
  ngOnInit() {
    this.userservice.getAllUser().subscribe(data =>{  
      this.userList =data
    });
     
  }

  
 



}

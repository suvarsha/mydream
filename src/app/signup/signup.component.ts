import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  constructor(private userservice:UserService) { }
  user : User=new User();
  submitted = false;  
  ngOnInit() {
    this.submitted=false
  }
  usersaveform=new FormGroup({
user_id:new FormControl('',[Validators.required,Validators.minLength(5)]),
user_name:new FormControl('',[Validators.required,Validators.minLength(5)]),
password:new FormControl('',[Validators.required,Validators.minLength(6)]),
user_type:new FormControl('',[Validators.required]),
mobile_number:new FormControl('',[Validators.required,Validators.minLength(10)]),
confirmed:new FormControl('',[Validators.required]),
user_mail:new FormControl('',[Validators.required,Validators.email])

     });
     saveUser(saveUser){
       this.user=this.user;
       this.user.id=this.usersaveform.get('user_id').value;
       
       this.user.userName=this.usersaveform.get('user_name').value;
       this.user.password=this.usersaveform.get('password').value;
       this.user.userType=this.usersaveform.get('user_type').value;
       console.log(this.user.userType);
       this.user.mobileNumber=this.usersaveform.get('mobile_number').value;
       this.user.confirmed=this.usersaveform.get('confirmed').value;
       this.user.email=this.usersaveform.get('user_mail').value;
       this.submitted=true;
       this.save();
}
save()
{
  this.userservice.saveUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
  this .user=new User();
}



}

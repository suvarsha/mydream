import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  constructor(private router:Router,private userservice:UserService) { }
  user : User=new User();
  message:String="SIGNUP";
  submitted = false;  
  ngOnInit() {
   var id= window.localStorage.getItem("edit-id");

    if(id!==null&&id!="")
    {

this.message="update record";
      this.userservice.findOneInAll(id)
    .subscribe(data => { this.user =data;
      

      this.usersaveform.setValue(this.user);


    });
    this.submitted=false;
  }
}
  usersaveform=new FormGroup({
id:new FormControl('',[Validators.required,Validators.minLength(5)]),
userName:new FormControl('',[Validators.required,Validators.minLength(5)]),
password:new FormControl('',[Validators.required,Validators.minLength(6)]),
userType:new FormControl('',[Validators.required]),
mobileNumber:new FormControl('',[Validators.required,Validators.minLength(10)]),
confirmed:new FormControl('',[Validators.required]),
email:new FormControl('',[Validators.required,Validators.email])

     });
     saveUser(saveUser){
       this.user=this.user;
       this.user.id=this.usersaveform.get('id').value;
       
       this.user.userName=this.usersaveform.get('userName').value;
       this.user.password=this.usersaveform.get('password').value;
       this.user.userType=this.usersaveform.get('userType').value;
       console.log(this.user.userType);
       this.user.mobileNumber=this.usersaveform.get('mobileNumber').value;
       this.user.confirmed=this.usersaveform.get('confirmed').value;
       this.user.email=this.usersaveform.get('email').value;
       this.submitted=true;
       this.save();
}
save()
{
  this.userservice.saveUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
  this .user=new User();
  window.localStorage.removeItem("edit-id");
  this.router.navigate(['user-list']);
}
usersaveForm(){
  this.submitted=false;
  this.usersaveform.reset();
  
  }


}

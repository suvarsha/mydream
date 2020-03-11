import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private userservice:UserService) { }
  user: User=new User();
  submitted = false;  
  ngOnInit() {
  }
  loginSaveForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
  saveUser(saveUser)
  {
    if(this.user.userName==""&&this.user.password==""){
      alert("fill the username and password");
    }
    else{
    this.user=new User();
    this.user.userName=this.loginSaveForm.get('userName').value;
  this.user.password=this.loginSaveForm.get('password').value
   this.userservice.findUserNameAndPassword(this.user.userName,this.user.password).subscribe(data=>{
      this.user=data;
     
      if(this.user!=null&&this.user.userType=='user')
      {
        
this.router.navigate(['/user'])
      }
      else if(this.user!=null&&this.user.userType=='admin')
      {
        this.router.navigate(['/admin'])
      }
      else {
        this.submitted=false;
        this.loginSaveForm.reset();
        alert("invalid login")
        this.router.navigate(['/login'])
      }
    });

  }


}
}

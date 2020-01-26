import { LocalService } from './../../sysgen/localservice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form;
  constructor(private http:LocalService,private router:Router) { }
isAuth;
  ngOnInit() {
    this.form=new FormGroup({
      "name": new FormControl('',Validators.compose([
        Validators.required,
       

      ])), 
      "email": new FormControl('',Validators.compose([
        Validators.required,
        Validators.email

      ])), 
      "password":new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      
    })
  }
  startRegister(data){
    this.http.RegisterUser(data).subscribe(
      response=>{
        if(response.con){
          this.http.changeAuth(false);
          this.isAuth=true;
         console.log(this.isAuth);
        
        }else{
          console.log("not a validate registration!!!");
        }
      },
      error =>{
        console.log(error);
      }
    )
    
  }

}


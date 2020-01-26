import { Alucard } from './../../sysgen/alucard';
import { LocalService } from './../../sysgen/localservice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form;
  constructor(private http:LocalService,private router:Router) { }

  ngOnInit() {
    this.form=new FormGroup({
     
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
  startLogin(data){
    this.http.loginUser(data).subscribe(
      response=>{
        if(response.con){
          Alucard.save(response.token);
          this.http.changeAuth(true);
         
          if(response.role==true){
            this.http.changeAuthAdmin(true);
          this.router.navigate(['admin']);
          
     
          }else{
          this.router.navigate(['user']);
          console.log(response.role);}
        }else{
          console.log("you are wrong password");
        }
      },
      error =>{
        console.log(error);
      }
    )
  }

}

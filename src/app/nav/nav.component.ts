import { Router } from '@angular/router';
import { Alucard } from './../sysgen/alucard';
import { LocalService } from './../sysgen/localservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
isAuth;
isAdmin;
  constructor(private http:LocalService,private router:Router) { }

  ngOnInit() {
    this.http.authBool.subscribe(
      response=>{
        this.isAuth = response;
      }
    )
    this.http.authBool.subscribe(
      response=>{
        this.isAdmin = response;
      }
    )
  }
  logoutUser(){
    Alucard.remove();
    this.router.navigate(['']);
    this.http.changeAuth(false);
    this.http.changeAuthAdmin(false);
  }
  

 
}


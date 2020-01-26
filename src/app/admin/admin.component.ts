import { LocalService } from './../sysgen/localservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template:`
 <router-outlet></router-outlet>`
})
export class AdminComponent implements OnInit {

  constructor(private http:LocalService) { }

  ngOnInit() {
    this.http.changeAuth(true);
  }

}

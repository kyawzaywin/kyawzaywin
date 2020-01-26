import { LocalService } from './../sysgen/localservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template:`
  <router-outlet></router-outlet>`
})
export class UserComponent implements OnInit {

  constructor(private http:LocalService) { }

  ngOnInit() {
    this.http.changeAuth(true);

  }

}

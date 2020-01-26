import { LocalService } from './../../sysgen/localservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private http:LocalService) { }
users;
  ngOnInit() {
    this.http.getallUsers().subscribe(
      response=>{
         console.log(response);
         this.users=response.msg;
      },
      error=>{
        console.log(error);
      }
    )
  }

}

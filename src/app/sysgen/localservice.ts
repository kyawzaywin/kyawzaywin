import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
   @Injectable()
   export class LocalService{
    BASE_URL="http://kyawzaywin.herokuapp.com/";
    userUrl=this.BASE_URL+'usersinfo';
   
    loginUrl=this.BASE_URL+'user/api/login';
    registerUrl=this.BASE_URL+'user/api/register';
    adminCatUrl=this.BASE_URL+'admin/cat/all';


    isAuth=new Subject<boolean>();
    authBool= this.isAuth.asObservable();

    isAdmin=new Subject<boolean>();
    adminBool= this.isAdmin.asObservable();
    
    isWriter=new Subject<boolean>();
    writerBool= this.isWriter.asObservable();



constructor(private http:HttpClient){
}

changeAuth(val: boolean){
    this.isAuth.next(val);
}
changeAuthAdmin(val: boolean){
    this.isAdmin.next(val);
}
changeAuthWriter(val: boolean){
    this.isWriter.next(val);
}




getallUsers(){
    return this.http.get(this.userUrl).pipe(
        map(
            (response:any)=>response
        )
    );
}

loginUser(data){
    return this.http.post(this.loginUrl,data).pipe(
        map(
            (response:any)=>response
        )
    )
}
RegisterUser(data){
    return this.http.post(this.registerUrl,data).pipe(
        map(
            (response:any)=>response
        )
    )
}


    }
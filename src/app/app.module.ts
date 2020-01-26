import { LocalService } from './sysgen/localservice';

import { AuthInterceptor } from './sysgen/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; //for template driven form 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { GuestComponent } from './guest/guest.component';
import { GuestHomeComponent } from './guest/guest-home/guest-home.component';
import { GuestAboutComponent } from './guest/guest-about/guest-about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AdminHomeComponent,
    UserHomeComponent,
    GuestComponent,
    GuestHomeComponent,
    GuestAboutComponent,
   

  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      // {
      //   path : '',
      //   component : HomeComponent
      // },
      {
        path : 'auth',component : AuthComponent,children :[
          {path:'login',component:LoginComponent},
          {path:'register',component:RegisterComponent}
        ]
        
      },
      {
        path : 'admin',component : AdminComponent,children :[
          {path:'',component:AdminHomeComponent}
        ]
        
      },
      {
        path : 'user',component : AdminComponent,children :[
          {path:'',component:UserHomeComponent},
        ]
        
      },
      {
        path : '',component : GuestComponent,children :[
          {path:'',component:GuestHomeComponent},
          {path:'about',component:GuestAboutComponent},
        ]
        
      },
      
     
      // {
      //   path : 'admin',component : AdminComponent,children :[
      //     {path:'home',component:AdminHomeComponent},
      //     {path:'realAdmin',component:RealAdminComponent},
      //     {path:'',component:UserComponent},
      //   ]
        
      // },


    ])
  ],
  providers: [LocalService,{
    provide :HTTP_INTERCEPTORS,
    useClass  : AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

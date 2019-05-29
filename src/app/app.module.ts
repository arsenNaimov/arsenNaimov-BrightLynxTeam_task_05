import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { UserListComponent } from './userList/userList.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AppRoutingModule } from './app-routing.module';
import { DesktopComponent } from './desktop/desktop.component';
import { FormsModule } from '@angular/forms';
import { RegistrationUserComponent } from './registration-user/registration-user.component';


const appRoutes: Routes =[
  {path: '', component: DesktopComponent},
  {path: 'userList', component: UserListComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'login/registration', component: RegistrationUserComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    UserListComponent,
    LoginUserComponent,
    RegistrationUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

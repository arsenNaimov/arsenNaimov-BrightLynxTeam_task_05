 import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { USERS } from '../classes/testUser';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {
  user = new User(0, '', '', '' , 0, '', '', '');

  ngOnInit() {
  }
  submit(){
        console.log(this.user);
      
    }
    //USERS.push(user);
  }


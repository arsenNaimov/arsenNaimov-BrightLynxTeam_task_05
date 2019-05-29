import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  private name: string;
  private password: string;
  fail: boolean = false;
  constructor() { }

  title: string = 'Проверка епта';

  ngOnInit() {
  }

  valid(){
    //валидаторы логина
    if(this.name == '' || this.name == ' '){
      this.fail = true;
    } 
    //валидаторы пароля
    if(this.password == ''|| this.password == ' '){
      this.fail = true;
    }
    //проверка совпадения
    if(this.fail){
      alert("Пароль введен некорректно. Используйте только латинский буквы и цифры");
      return false;
    }else{
      alert(this.name + " +++ " + this.password);
      return true;
      //тут будет проверка логина и пароля из базы данных и валидация клиента в случае успеха, но я пока не знаю как это реализовать.
    }
  }
}

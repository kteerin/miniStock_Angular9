import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
// ตัวแปร object
profile = {
  "name":"Namo",
  "tel":"0899985511",
  "gender":"Male"
}
// 2 Way data binding
userData = {
  "email":"",
  "password":""
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitLogin()
  {
    if(this.userData.email=="admin@gmail.com" && this.userData.password=="1234")
    {
      alert("Loing Success")
      this.router.navigate(['backend']);
    }
    else{
      alert("Login Fail !!!")
    }

  }

}

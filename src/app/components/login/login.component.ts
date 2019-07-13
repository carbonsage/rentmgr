import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  constructor(public auth: AccountService) { }

  login(email: string, password: string) {
    this.auth.login(email, password)
      .then(data => {
        alert("Login successful");
      })
      .catch(err => {
        alert("Login failed because of an unexpected error");
      })
  }

  gLogin() {
    this.auth.gLogin()
      .then(data => {
        alert("Login successful");
      })
      .catch(err => {
        alert("Login failed because of an unexpected error");
      })
  }

  ngOnInit() {
  }

}

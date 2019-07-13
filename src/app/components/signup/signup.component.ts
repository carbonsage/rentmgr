import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  constructor(public auth: AccountService) { }

  signUp(email: string, password: string) {
    this.auth.signUp(email, password)
      .then(data => {
        alert("Your account has been created");
      })
      .catch(err => {
        alert("Your account could not be created because of an unexpected error");
      })
  }

  gLogin() {
    this.auth.gLogin()
      .then(data => {
        alert("Your account has been created");
      })
      .catch(err => {
        alert("Your account could not be created because of an unexpected error");
      })
  }

  ngOnInit() {
  }

}

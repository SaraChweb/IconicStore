import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private userservice: UserserviceService,
    private router: Router
  ) {
    sessionStorage.clear();
  }
  userData: any;
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // Login user
  login() {
    if (this.loginForm.valid) {
      this.userservice
        .getByCode(this.loginForm.value.username)
        .subscribe((res) => {
          this.userData = res;
          console.log(this.userData, 'useer');
          if (this.userData.password === this.loginForm.value.password) {
            sessionStorage.setItem('username', this.userData.id);
            sessionStorage.setItem('password', this.userData.password);
            this.router.navigate(['']);
            alert('Login success!');
            this.loginForm.reset();
          } else {
            alert('User not found!');
          }
        });
    }
  }
}

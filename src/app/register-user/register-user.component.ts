import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userservice: UserserviceService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }
// Register user
  userRegister() {
    if (this.registerForm.valid) {
      this.userservice.procedRegister(this.registerForm.value).subscribe(
        (res) => {
          alert('You are registered successfully!');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        (err) => {
          alert('Something went wrong!');
        }
      );
    }
  }
}

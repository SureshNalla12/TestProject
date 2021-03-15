import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  userData: any;
  constructor(private formBuilder: FormBuilder, private router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('UserInfo'));
  }
  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.userData != null || this.userData != undefined) {
      var req = {
        "userName": this.loginForm.value.username,
        "password": this.loginForm.value.password
      }
      if (req.userName == this.userData.name && req.password == this.userData.password) {
        this.router.navigate(['/dashboard'])
      }
    }
  }
}
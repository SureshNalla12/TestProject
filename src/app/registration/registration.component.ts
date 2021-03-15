import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,private router:Router ) { }

  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Id: ['', Validators.required],
      Name: ['', Validators.required],
      Password: ['', Validators.required],
      Courses: ['', [Validators.required, Validators.minLength(6)]],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
    });
  }

  onSubmit() {
    var req = {
      "id": this.registerForm.value.Id,
      "name": this.registerForm.value.Name,
      "password": this.registerForm.value.Password,
      "courses": this.registerForm.value.Courses,
      "city": this.registerForm.value.City

    }
    localStorage.setItem('UserInfo',JSON.stringify(req));
    this.router.navigate(['/login'])
  }
}

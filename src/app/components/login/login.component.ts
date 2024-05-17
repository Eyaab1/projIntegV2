import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Corrected import
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  loginform!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      user: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  get pwdmb() {
    return this.loginform.get('pwd');
  }

  pwdoblig() {
    return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
  }

  get usermb() {
    return this.loginform.get('user');
  }

  useroblig() {
    return this.usermb?.errors?.['required'] && this.usermb?.touched;
  }
  
  login() {
    if (this.loginform.valid) {
      const username = this.loginform.get('user')?.value;
      const password = this.loginform.get('pwd')?.value;
    }
  }
  
}

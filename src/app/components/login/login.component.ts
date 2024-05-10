import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  // loginform!: FormGroup;

  // constructor(private router: Router, private fb: FormBuilder, private authservice: AuthService) {}

  

  // get pwdmb() {
  //   return this.loginform.get('pwd');
  // }

  // pwdoblig() {
  //   return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
  // }

  // get usermb() {
  //   return this.loginform.get('user');
  // }

  // useroblig() {
  //   return this.usermb?.errors?.['required'] && this.usermb?.touched;
  // }
  
  //  login() {
  //    if (this.loginform.valid) {
  //      const username = this.loginform.get('user')?.value;
  //     const password = this.loginform.get('pwd')?.value;
  // //     this.authservice.login(username, password);     

  //    }
  //  }
  
}

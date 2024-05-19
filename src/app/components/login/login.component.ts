import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Corrected import
import { CommonModule } from '@angular/common';
import { EnseignantService } from '../../services/enseignant.service';
import { HttpClientModule, HttpParams } from '@angular/common/http';


import { Enseignant } from '../../classes/enseignant';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  providers: [
    EnseignantService 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  loginform!: FormGroup;
  enseignant:any;
  enseignants!:Enseignant[];
  constructor(private router: Router, 
    private fb: FormBuilder,
    private ensService: EnseignantService
  ) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });

    this.ensService.getEnseignantByEmail('aaa@gmail.com').subscribe(
      (data) => {
        this.enseignant = data;
        
      },
      (error) => {
        console.error('Error fetching user', error);
      }
    );
    this.getAllEnseiggnant();
  }
  getAllEnseiggnant() {
    this.ensService.getAllEnseiggnant().subscribe((data) => {
      this.enseignants = data;
      console.log(this.enseignants);
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
    const { email, password } = this.loginform.value;
    this.ensService.getEnseignantByEmail(email).subscribe(
      (ens) => {
        if (ens && ens.password === password) {
          this.router.navigate(['/userInter']);
          console.log("User found, WELCOME!!");
        } else {
          console.log("Invalid user");
        }
      },
      (error) => {
        console.error('Error fetching user', error);
      }
    );
  }
  


  }
  


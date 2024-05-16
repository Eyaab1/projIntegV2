import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ReactiveFormsModule,
            FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  profileForm!: FormGroup<{}>;
constructor(private formBuilder: FormBuilder){}

ngOnInit() {
  this.profileForm = this.formBuilder.group({
    
  });
}
}

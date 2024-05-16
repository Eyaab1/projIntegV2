import { Component } from '@angular/core';
import{MatDatepickerModule} from'@angular/material/datepicker';
import{MatNativeDateModule} from'@angular/material/core';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './calendrier.component.html',
  styleUrl: './calendrier.component.css'
})
export class CalendrierComponent {

}

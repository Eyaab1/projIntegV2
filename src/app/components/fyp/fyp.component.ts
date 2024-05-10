import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-fyp',
    standalone: true,
    templateUrl: './fyp.component.html',
    styleUrl: './fyp.component.css',
    imports: [HeaderComponent]
})
export class FypComponent {

}

import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor( private router: Router ,private authService :AuthService){ }
  activeMenuItem: string = '';

  
  toggleMenuItem(menuItemId: string): void {
    this.activeMenuItem = menuItemId;
  }
  logout(){
    this.authService.logout();
  }
  


}



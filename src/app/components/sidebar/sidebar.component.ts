import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor( private router: Router){ }
  activeMenuItem: string = ''; // Track active menu item
  isNotificationPopupOpen: boolean = false;

  toggleMenuItem(menuItemId: string): void {

  }
}

  // Close the notification popup when clicking outside of it
  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   const notificationIcon = document.getElementById('notifications');
  //   const notificationPopup = document.querySelector('.notifications-popup');

  //   if (notificationIcon && notificationPopup) {
  //     if (!notificationIcon.contains(target) && !notificationPopup.contains(target)) {
  //       this.isNotificationPopupOpen = false;
  //     }
  //   }
  // }

  // goToHome() {
  //   this.router.navigate(['/home']);
  // }

  // goToAbout() {
  //   this.router.navigate(['/about']);
  // }


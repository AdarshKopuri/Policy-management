import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: AuthService , private router : Router) {}

  logout(): void {
    this.authService.logout();
  }

value:any=''
  navClick(value: any){
    console.log(value)
    const navItems = document
    .getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
      if (navItems[i].id === 'nav-' + value) {
          navItems[i].className =
              'nav-item inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active';
      } else {
          navItems[i].className =
              'nav-item inline-block p-4 border-b-2  border-transparent rounded-t-lg  hover:text-gray-600 hover:border-gray-300';
      }
  }
  if(value==="property"){
    this.router.navigate(['/consumer/createProperty'])

  }

else if(value==="business"){
  this.router.navigate(['/consumer/createBusiness'])

}
else if(value==="home"){
  this.router.navigate(['/dashboard'])

}
else if(value==="policy"){
  this.router.navigate(['/createPolicy'])

}
else if(value==="quotes"){
  this.router.navigate(['user/policies/request'])

}
else{
  this.router.navigate([''])

}


  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.authService.currentUserValue;
    if (user && route.data['role'] && route.data['role'] === user.role) {
      return true;
    }

    console.log(route.data)
    route.data['role'] && console.log(route.data['role'])
    this.router.navigate(['/login']);

    return false;
  }
}

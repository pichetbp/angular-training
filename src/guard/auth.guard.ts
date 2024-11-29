import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot, // user want to go XXX route
    state: RouterStateSnapshot // snap shot state of router at that time
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['/login']);
      return false;
    }
    return true;
  }
}

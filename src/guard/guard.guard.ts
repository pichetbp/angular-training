import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  console.log('Guarding the route', route, state);
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    // Redirect to login page or show an error message
    router.navigate(['/login']);
    return false;
  }
  return true;
};

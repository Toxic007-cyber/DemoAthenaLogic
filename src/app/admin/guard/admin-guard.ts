import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('adminToken');

  if (!token) {
    router.navigate(['/adminlogin']);
    return false;
  } else {
    return true;
  }
};

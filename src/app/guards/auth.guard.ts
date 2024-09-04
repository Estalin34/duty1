import { CanActivateFn } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Router } from 'express';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UsersService);
  const router =inject(Router());

  if(userService.getCurrentUser() === null){
    router.navigate(['/login']);
    return false;
  }
   return  true;
};

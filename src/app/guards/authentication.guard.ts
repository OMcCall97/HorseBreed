import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import assert from 'assert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export const authenticationGuard: CanActivateFn = (route, state) => {
  return true;
  assert.constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isUserLoggedIn$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
};
function canActivate(route: ActivatedRouteSnapshot, ActivatedRouteSnapshot: any, state: RouterStateSnapshot, RouterStateSnapshot: any) {
  throw new Error('Function not implemented.');
}


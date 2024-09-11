import { ROUTES } from '@ui/helpers/constants/routes';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {
  constructor(private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (this.hasUser()) {
      return true;
    }
    alert('no tienes permisos');
    this.router.navigate([ROUTES.LOGIN]);
    return false;
  }

  hasUser(): boolean {
    return true;
  }
}

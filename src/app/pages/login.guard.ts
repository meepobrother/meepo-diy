import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as store from 'store';
@Injectable()
export class IsLoginGuard implements CanActivate {
    constructor(
        public router: Router
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const isLogin = store.get('isLogin');
        if (isLogin) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}


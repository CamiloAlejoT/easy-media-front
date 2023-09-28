import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root',
})

@Injectable()
class PermissionsService {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
    canGoToPublicationsModule(): boolean {
        if (this.authService.checkAuth()) {
            return this.authService.isAuthenticated
        }
        else {
            this.router.navigate([''])
            return false
        }
    }

    canGoToAuthModule(): boolean {
        debugger
        if (this.authService.checkAuth()) {
            this.router.navigate(['publications'])
            return false
        }
        else {
            return !this.authService.isAuthenticated
        }
    }
}

export const canGoToPublicationsModule: CanActivateFn =
    () => {
        return inject(PermissionsService).canGoToPublicationsModule();
    }

export const canGoToAuthModule: CanActivateFn =
    () => {
        return inject(PermissionsService).canGoToAuthModule();
    }
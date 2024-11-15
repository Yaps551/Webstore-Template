import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({providedIn: 'root'})
export class AuthGuard  {

    constructor(private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
        if (document.cookie && document.cookie.indexOf('IsLoggedIn') != -1) {
            return true;
        }

        this.userService.updateLoginStatus();
        return this.router.navigate(['/auth']);
    }

    
}
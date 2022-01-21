import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { authDao } from "../services/auth-dao.service";

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private authDao: authDao) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.authDao.getRole().pipe(map(res => {
            return res.role == "Admin" ? true : this.router.createUrlTree(['/']);
        }))
    }
    
}
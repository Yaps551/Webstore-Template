import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CookieService } from './cookie.service'

@Injectable({ providedIn: 'root' })
export class UserService {
    isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(private cookieService: CookieService) {}

    updateLoginStatus(): void {
        const isLoggedIn = this.cookieService.findCookie("IsLoggedIn");

        this.isLoggedIn.next(isLoggedIn || false);
    }

    isAdmin(): boolean {
        const isAdmin = this.cookieService.findCookie("IsAdmin");

        return isAdmin;
    }
}
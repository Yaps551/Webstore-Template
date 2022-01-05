import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    isLoggedIn = new Subject<boolean>();

    updateLoginStatus(): void {
        const isLoggedIn = JSON.parse(localStorage.getItem("LoggedIn"));

        this.isLoggedIn.next(isLoggedIn || false);
    }
}
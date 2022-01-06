import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    isLoggedIn = new BehaviorSubject<boolean>(false);

    updateLoginStatus(): void {
        const isLoggedIn = JSON.parse(localStorage.getItem("LoggedIn"));

        this.isLoggedIn.next(isLoggedIn || false);
    }
}
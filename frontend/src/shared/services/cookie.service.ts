import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CookieService {

    findCookie(cookieToFind: string): boolean {
        let cookieExists = false;
        const cookies : Array<string> = document.cookie.split(';');

        cookies.forEach(cookie => {
            const cookieName: string = cookie.substring(0, cookie.indexOf('=')).trim();

            if (cookieName == cookieToFind) cookieExists = true;
        });

        return cookieExists;
    }
}
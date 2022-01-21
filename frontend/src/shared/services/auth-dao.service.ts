import { Injectable } from "@angular/core";
import { Dao } from "./dao.service";

@Injectable({ providedIn: 'root' })
export class authDao {

    constructor(private dao: Dao) {}

    signup(email: string,password: string) {
        const body = { email: email, password: password };

        return this.dao.sendPostRequest('auth/signup', body);
    }
    
    login(email: string, password: string) {
        const body = { email: email, password: password };

        return this.dao.sendPostRequest('auth/login', body);
    }

    logout() {
        return this.dao.sendGetRequest('auth/logout');
    }

    getRole() {
        return this.dao.sendGetRequest('auth/role');
    }
}
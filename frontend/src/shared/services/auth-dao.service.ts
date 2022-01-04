import { Injectable } from "@angular/core";
import { Dao } from "./dao.service";

@Injectable({ providedIn: 'root' })
export class authDao {

    constructor(private dao: Dao) {}
    
    login(email: string, password: string) {
        
    }
}
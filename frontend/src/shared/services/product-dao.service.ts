import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Dao } from "./dao.service";

@Injectable({ providedIn: 'root' })
export class productDao {

    constructor(private dao: Dao) {}
    
    getProducts(): Observable<any[]> {
        return this.dao.sendGetRequest('product/products')
        .pipe(
            map(res => {
                return res.products;
            })
        );
    }
}
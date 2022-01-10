import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product.model";
import { Dao } from "./dao.service";

@Injectable({ providedIn: 'root' })
export class CartDao {

    constructor(private dao: Dao) {}

    addItem(body: object): Observable<any> {
        return this.dao.sendPostRequest('cart/item', body);
    }
    
    getCart(): Observable<any[]> {
        return this.dao.sendGetRequest('cart/myCart')
        .pipe(
            map(res => {
                return res.products;
            })
        );
    }

    putCart(body: object): Observable<any> {
        return this.dao.sendPutRequest('cart/update', body);
    }

    deleteProduct(itemId: number): Observable<any> {
        return this.dao.sendDeleteRequest('cart/' + itemId);
    }
}
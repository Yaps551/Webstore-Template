import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product.model";
import { Dao } from "./dao.service";

@Injectable({ providedIn: 'root' })
export class productDao {

    constructor(private dao: Dao) {}

    createProduct(body: object): Observable<any> {
        return this.dao.sendPostRequest('product/create', body);
    }
    
    getProducts(): Observable<any[]> {
        return this.dao.sendGetRequest('product/products')
        .pipe(
            map(res => {
                return res.products;
            })
        );
    }

    getProduct(productId: number): Observable<any> {
        return this.dao.sendGetRequest('product/' + productId)
        .pipe(
            map(res => {
                return res.product;
            })
        );
    }

    putProduct(product: Product): Observable<any> {
        return this.dao.sendPutRequest('product/update', product);
    }

    deleteProduct(productId: number): Observable<any> {
        return this.dao.sendDeleteRequest('product/' + productId);
    }
}
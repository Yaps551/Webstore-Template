import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({ providedIn: 'root' })
export class productDao {

    constructor(private httpC: HttpClient) {}
    
    getProducts(): Observable<any[]> {
        return this.httpC.get<{ message: string, products: Product[] }>('http://localhost:8080/product/products')
        .pipe(
            map(res => {
                return res.products;
            })
        );
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class Dao {
    dbAddress = environment.apiUrl;

    constructor(private httpC: HttpClient) {}

    sendGetRequest(urlPath: string): Observable<any> {
        return this.httpC.get<any>(this.dbAddress + urlPath);
    }

    sendPostRequest(urlPath: string, body: object): Observable<any> {
        return this.httpC.post<any>(this.dbAddress + urlPath, body);
    }
}
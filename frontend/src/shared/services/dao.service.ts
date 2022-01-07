import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class Dao {
    dbAddress = environment.apiUrl;

    constructor(private httpC: HttpClient) {}

    sendGetRequest(urlPath: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        
        return this.httpC.get<any>(this.dbAddress + urlPath, { headers: headers, withCredentials: true });
    }

    sendPostRequest(urlPath: string, body: unknown): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpC.post<any>(this.dbAddress + urlPath, body, { headers: headers, withCredentials: true });
    }

    sendPutRequest(urlPath: string, body: unknown): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpC.put<any>(this.dbAddress + urlPath, body, { headers: headers, withCredentials: true });
    }
}
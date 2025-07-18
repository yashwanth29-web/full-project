import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
baseUrl = "http://localhost:5000/api";
  constructor(private http: HttpClient) { }
  
  registerUser(reqBody: any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/register`,reqBody);
  }
  loginUser(reqBody: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, reqBody);
  }
  



}

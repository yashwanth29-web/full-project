import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseUrl = "http://localhost:5000/api";
  constructor(private http : HttpClient) { }

  getStudents() {
    
    return this.http.get(`${this.baseUrl}/students`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiBaseUrl;
 
  constructor(private http: HttpClient) {}
 
  fetchData(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' }); // Return response as a string
  }
}
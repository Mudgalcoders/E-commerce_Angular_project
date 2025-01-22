import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private apiUrl: string;
 
  constructor(private http: HttpClient) {
    // Set the API URL dynamically based on environment
    // this.apiUrl = '/shainkeydetails/createShainkeydetails';  // This will come from the environment file
    this.apiUrl = environment.serverUrl
   
  }

  // PostData(data : any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}`, data);
  // }
  PostData(endpoint : string, data: any): Observable<any> {
    const url = `${this.apiUrl}${endpoint}`;  // Combine base URL with endpoint
    return this.http.post(url, data);  // Make the HTTP POST request
  }

  GetData(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}${endpoint}`;  // Remove any trailing/leading slashes
    return this.http.get(url);  // Make the HTTP GET request
  }

  // Login API 

  LoginPostData(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}${endpoint}`;  // Combine base URL with endpoint

    // Create HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Specify content type
      'Authorization': 'Bearer your-token',  // If you need an Authorization token
      // You can add more headers as needed, e.g., for custom headers
      // 'Custom-Header': 'value'
    });

    // Make the HTTP POST request with headers
    return this.http.post(url, data, { headers });
  }
  UserLogout(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}${endpoint}`;  // Combine base URL with endpoint
    // Make the HTTP POST request with headers
    return this.http.post(url,'');
  }
 
}

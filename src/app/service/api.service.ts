import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  
  getData():Observable<any>{
    return this.http.get<any>('${this.apiUrl}/data');
  
  }
  postData(data:any):Observable<any>{
    return this.http.post<any>('${this.apiUrl}/data}',data)
  }

   

   }


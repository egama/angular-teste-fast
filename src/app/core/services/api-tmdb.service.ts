import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiTMDBService {
  private apiUrl = environment.TMDB_API;
  private token = environment.TMDB_TOKEN_API;
  private apiKey = environment.TMDB_API_KEY;
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient) {}

  get(url: string, urlVariables: string = ''): Observable<any> {
    const apiUrl = `${this.apiUrl}${url}?api_key=${this.apiKey}&language=pt-BR${urlVariables}`;
    return this.http.get(apiUrl, { headers: this.headers });
  }

  post(url: string, data: any): Observable<any> {
    const apiUrl = `${this.apiUrl}${url}`;
    return this.http.post(apiUrl, data, { headers: this.headers });
  }

  put(url: string, id: number, data: any): Observable<any> {
    const apiUrl = `${this.apiUrl}${url}/${id}`;
    return this.http.put(apiUrl, data, { headers: this.headers });
  }

  delete(url: string, id: number): Observable<any> {
    const apiUrl = `${this.apiUrl}${url}/${id}`;
    return this.http.delete(apiUrl, { headers: this.headers });
  }
}

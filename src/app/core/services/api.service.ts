import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, switchMap, timeout } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { MessageService } from './messageService';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private _urlService: string;
  private timeout = 300000;

  get access(): any {
    const access: any = this.storageService.getItem('access');
    if (!access) return null;

    return access;
  }

  get accessToken(): string {
    return this.access?.token;
  }

  //não alterar consulta base apiImperioo
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
    private storageService: LocalStorageService,
    private messageService: MessageService
  ) {
    this._urlService = environment.api;
  }

  get(url: string, params?: HttpParams, auth: boolean = true): Observable<any> {
    return this._httpClient
      .get<any>(`${this._urlService}${url}`, {
        ...(auth ? this.getHeader() : {}),
        params,
      })
      .pipe(timeout(this.timeout), catchError(this.catchError));
  }

  getPagination(
    url: string,
    params?: HttpParams,
    auth: boolean = true
  ): Observable<any> {
    return this._httpClient
      .get<any>(`${this._urlService}${url}`, {
        ...(auth ? this.getHeader() : {}),
        params,
        observe: 'response',
      })
      .pipe(catchError(this.catchError));
  }

  post(url: string, data: any, auth: boolean = true): Observable<any> {
    return this._httpClient
      .post<any>(
        `${this._urlService}${url}`,
        data,
        auth ? this.getHeader() : undefined
      )
      .pipe(timeout(this.timeout), catchError(this.catchError));
  }

  postFile(url: string, data: FormData, auth: boolean = true): Observable<any> {
    return this._httpClient
      .post<any>(
        `${this._urlService}${url}`,
        data,
        auth ? this.getHeader(false) : undefined
      )
      .pipe(timeout(this.timeout), catchError(this.catchError));
  }

  put(url: string, data: any, auth: boolean = true): Observable<any> {
    return this._httpClient
      .put<any>(
        `${this._urlService}${url}`,
        data,
        auth ? this.getHeader() : undefined
      )
      .pipe(timeout(this.timeout), catchError(this.catchError));
  }

  delete(url: string, data?: {}, auth: boolean = true): any {
    return this._httpClient
      .delete<any>(`${this._urlService}${url}`, {
        ...(auth ? this.getHeader() : undefined),
        ...data,
      })
      .pipe(timeout(this.timeout), catchError(this.catchError));
  }

  private getHeader(isJSON: boolean = true) {
    if (this.accessToken) {
      const auth = 'Bearer ' + this.accessToken;
      if (isJSON) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: auth,
        });
        return { headers: headers };
      } else {
        const headers = new HttpHeaders({
          Authorization: auth,
        });
        return { headers: headers };
      }
    } else {
      return {};
    }
  }

  private catchError = (error: any) => {
    if (error.error != null && error.error.message != null) {
      this.messageService.error('Erro', error.error.message);
      return throwError(error.error);
    }

    throw error;
  };
}

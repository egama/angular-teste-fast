import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environments/environment';
import { ApiTMDBService } from '../../services/api-tmdb.service';
import { Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesController {
  protected endpoint = '/discover/movie';

  constructor(private apiTMDB: ApiTMDBService) {}
  response: any;
  getMoviesPagination(page: number) {
    return new Promise((resolve, reject) => {
      const observer = {
        next: (response: any) => {
          response.results.map((item: any) => {
            item.poster_path = `${environment.TMDB_IMG}${item.poster_path}`;
          });
          resolve(response.results);
        },
        error: (error: any) => reject(error),
        complete: () => {},
      };

      this.apiTMDB.get(`/discover/movie`, `&page=${page}`).subscribe(observer);
    });
  }

  getMoviesFilteredByIdGenrePagination(idsGender: number[], page: number) {
    return new Promise((resolve, reject) => {
      const observer = {
        next: (response: any) => {
          response.results.map((item: any) => {
            (item.poster_path = `${environment.TMDB_IMG}${item.poster_path}`),
              idsGender;
          });
          resolve(response);
        },
        error: (error: any) => reject(error),
        complete: () => {},
      };

      const ids = idsGender
        .map((id, index) => (index === 0 ? id : `%2C${id}`))
        .join('');
      this.apiTMDB
        .get(`/discover/movie`, `&page=${page}&with_genres=${ids}`)
        .subscribe(observer);
    });
  }

  getAllGenres() {
    return new Promise((resolve, reject) => {
      const observer = {
        next: (response: any) => resolve(response.genres),
        error: (error: any) => reject(error),
        complete: () => {},
      };

      this.apiTMDB.get('/genre/movie/list').subscribe(observer);
    });
  }

  getAllDiscover() {
    return new Promise((resolve, reject) => {
      const observer = {
        next: (response: any) => resolve(response.genres),
        error: (error: any) => reject(error),
        complete: () => {},
      };
      this.apiTMDB.get('/discover/movie').subscribe(observer);
    });
  }
  getAllChanges() {
    return new Promise((resolve, reject) => {
      const observer = {
        next: (response: any) => resolve(response.genres),
        error: (error: any) => reject(error),
        complete: () => {},
      };

      this.apiTMDB.get('/movie/changes').subscribe(observer);
    });
  }

  getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
}

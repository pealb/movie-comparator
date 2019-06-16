import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IResponse } from '../models/response.model';
import { IMovie } from '../models/movie.model';

import { DbService } from './db.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey: string = ""; //lekerheto innen: http://www.omdbapi.com/apikey.aspx
  private url: string = "https://www.omdbapi.com/?apikey=" + this.apiKey;

  constructor(private http: HttpClient, private db: DbService) { }

  getMoviesByTitle(term: string): Observable<IMovie[]> {
    if (this.db.isOnline) {
      return this.http.get(this.url + "&s=" + term).pipe(
        map((res: IResponse) => { return res.Search })
      );
    } else {
      return this.db.getAllMovies().pipe(
        map(movies => movies.filter(movie => movie.Title.toLowerCase().includes(term)))
      );
    }
  }

  getMovieByImdbId(id: string): Observable<IMovie> {
    if (this.db.isOnline) {
      return this.http.get<IMovie>(this.url + "&i=" + id);
    }
    else {
      return this.db.getMovie(id);
    }
  }

}

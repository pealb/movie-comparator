import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IResponse } from '../models/response.model';
import { IMovie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey: string = "4b6065ff";
  private url: string = "http://www.omdbapi.com/?apikey=" + this.apiKey;

  constructor(private http: HttpClient) { }

  getMoviesByTitle(term: string): Observable<IMovie[]> {
    return this.http.get(this.url + "&s=" + term).pipe(
      map((res: IResponse) => { return res.Search })
    );
  }

  getMovieByImdbId(id: string): Observable<IMovie> {
    return this.http.get<IMovie>(this.url + "&i=" + id);
  }

}

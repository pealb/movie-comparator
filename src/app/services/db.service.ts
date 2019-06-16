import { Injectable } from '@angular/core';

import { Observable, Subject, from } from 'rxjs';
import { map } from 'rxjs/operators';

import Dexie from 'dexie';

import { IMovie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  private db: any;
  private internalConnectionChanged = new Subject<boolean>();

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());

    this.createDatabase();
  }

  private updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }

  private createDatabase() {
    this.db = new Dexie('movies');
    this.db.version(1).stores({
      movies: 'imdbID' 
    });
  }

  addMovie(movie: IMovie) {
    this.db.movies
      .put(movie)
      .then(async () => {
        console.log('saved in DB', movie);
      })
      .catch(e => {
        console.error('error', (e.stack || e));
      });
  }

  getMovie(imdbID: string) {
    return from(this.db.movies
      .where('imdbID')
      .equals(imdbID)
      .toArray()
    ).pipe(map(movies => movies[0]));
  }

  getAllMovies(): Observable<IMovie[]> {
    return from<IMovie[]>(this.db.movies.toArray());
  }
}
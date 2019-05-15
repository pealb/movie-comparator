import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable, empty } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { IMovie } from '../../../models/movie.model';

@Component({
  selector: 'app-movie-search-left',
  templateUrl: './movie-search-left.component.html',
  styleUrls: ['./movie-search-left.component.css']
})
export class MovieSearchLeftComponent implements OnInit {

  movies$: Observable<IMovie[]>;
  input: string;
  @Output() cchange = new EventEmitter();

  constructor(private ds: DataService) { }

  ngOnInit() { }

  keyup() {
    this.movies$ = this.ds.getMoviesByTitle(this.input);
  }

  chooseMovie(title: string, id: string) {
    this.cchange.emit(id);
    this.input = title;
    this.movies$ = empty();
  }

  clearSelection() {
    this.chooseMovie("", null);
  }

}

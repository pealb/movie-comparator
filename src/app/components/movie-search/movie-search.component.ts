import { Component, OnInit } from '@angular/core';

import { IMovie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  compare: boolean;
  height: number;
  movieLeft: IMovie;
  movieRight: IMovie;
  error: string;
  first: boolean;
  second: boolean;

  constructor(private ds: DataService) { 
    this.compare = false;
    this.height = 0;
    this.movieLeft = null;
    this.movieRight = null;
    this.error = "";
    this.first = false;
    this.second = false;
  }

  ngOnInit() { }

  catchL(e) {
    if(e == null) {
      this.movieLeft = null;
    } 
    else {
      this.ds.getMovieByImdbId(e).subscribe(res => this.movieLeft = res);
    }
    this.compare = false;
    this.height = 0;
  }

  catchR(e) {
    if(e == null) {
      this.movieRight = null;
    }
    else {
      this.ds.getMovieByImdbId(e).subscribe(res => this.movieRight = res);
    }
    this.compare = false;
    this.height = 0;
  }

  toggleCompare() {
    if(this.movieLeft == null || this.movieRight == null) {
      this.compare = false;
      this.height = 0;
      this.error = "You must select two movies";
    }
    else if(this.movieLeft.imdbID == this.movieRight.imdbID) {
      this.compare = false;
      this.height = 0;
      this.error = "Please select two different movies";
    }
    else {
      let counter = 0;
      let movieLeftGenres = this.movieLeft.Genre.split(", ");
      let movieRightGenres = this.movieRight.Genre.split(", ");

      for(let igenre of movieLeftGenres) {
        for(let jgenre of movieRightGenres) {
          if(igenre == jgenre) {
            counter++;
          }
        }
      }
  
      if((movieLeftGenres.length < movieRightGenres.length && counter < Math.ceil(movieLeftGenres.length/2))
          || (movieLeftGenres.length > movieRightGenres.length && counter < Math.ceil(movieRightGenres.length/2))) {
            this.error = "The two movies must have the same genre";
            return;
      }
  
      if(parseFloat(this.movieLeft.imdbRating) > parseFloat(this.movieRight.imdbRating)) {
        this.first = true;
        this.second = false;
      } 
      else {
        this.first = false;
        this.second = true;
      }

      this.compare = true;
      this.height = 650;
      this.error = "";
    }
  }

  clearSelections() {
    //TODO
  }

}

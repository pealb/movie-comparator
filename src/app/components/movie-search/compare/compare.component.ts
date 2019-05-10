import { Component, OnInit, Input } from '@angular/core';

import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  @Input() movieLeft: IMovie;
  @Input() movieRight: IMovie;
  @Input() first: boolean;
  @Input() second: boolean;

  constructor() { }

  ngOnInit() { }
}

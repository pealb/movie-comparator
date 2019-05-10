import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchLeftComponent } from './movie-search-left.component';

describe('MovieSearchLeftComponent', () => {
  let component: MovieSearchLeftComponent;
  let fixture: ComponentFixture<MovieSearchLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchRightComponent } from './movie-search-right.component';

describe('MovieSearchRightComponent', () => {
  let component: MovieSearchRightComponent;
  let fixture: ComponentFixture<MovieSearchRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

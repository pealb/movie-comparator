import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './components/app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieSearchLeftComponent } from './components/movie-search/movie-search-left/movie-search-left.component';
import { MovieSearchRightComponent } from './components/movie-search/movie-search-right/movie-search-right.component';
import { CompareComponent } from './components/movie-search/compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieSearchLeftComponent,
    MovieSearchRightComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

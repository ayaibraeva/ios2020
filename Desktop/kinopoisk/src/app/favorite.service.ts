import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {movies} from "./movies";
import {importType} from "@angular/compiler/src/output/output_ast";
import {Movie} from "./interfaces/Movie";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  moviesFav = [];


  addToFav(movies) {
    this.moviesFav.push(movies);
  }

  getMovies() {
    return this.moviesFav;
  }

  clearFav() {
    this.moviesFav = [];
    return this.moviesFav;
  }
}

import { Component, OnInit } from '@angular/core';
import {movies} from '../movies';
import {MovieService} from '../movie.service';
import {FavoriteService} from '../favorite.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService, private favouriteService: FavoriteService) {}


  ngOnInit() {
    this.getMovies();
  }
  sortByRatingDesc() {
    const a = this.movieService.sortByRatingDesc(this.movies);
    a.subscribe(movie => this.movies = movie );
  }
  addToFav(movie) {
    this.favouriteService.addToFav(movie);
    window.alert('Your product has been added to the cart!');
  }
  getMovies() {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

}

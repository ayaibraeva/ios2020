import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie.service';
import {FavoriteService} from '../favorite.service';



@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  movie: any;
  movies: any;

  constructor(
      private route: ActivatedRoute,
      private movieService: MovieService,
      private favouriteService: FavoriteService,
  ) {}

  ngOnInit() {
    this.getMovie();
  }
  addToFav(movie) {
    this.favouriteService.addToFav(movie);
    window.alert('Your product has been added to the cart!');
  }

  getMovie() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }
  getMovies() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMoviesByCategoryId(id).subscribe(movies => this.movie = movies);
  }

}

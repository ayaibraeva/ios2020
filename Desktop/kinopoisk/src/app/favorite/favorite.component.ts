import { Component, OnInit } from '@angular/core';
import {FavoriteService} from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 moviesFav;

  constructor(private favouriteService: FavoriteService, ) { }

  ngOnInit(): void {
    this.moviesFav = this.favouriteService.getMovies();
  }
  clearFav() {
    this.favouriteService.clearFav();
  }

}

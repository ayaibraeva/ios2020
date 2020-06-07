import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';

import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  movies: any;
  category: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value => {
      this.getMovies();
      this.getCategory();
    }));
  }

  ngOnInit() {
    this.getMovies();
    this.getCategory();
  }

  getMovies() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMoviesByCategoryId(id).subscribe(movies => this.movies = movies);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

}

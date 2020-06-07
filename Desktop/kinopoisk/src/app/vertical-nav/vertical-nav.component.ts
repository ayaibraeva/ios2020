import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {movies} from "../movies";

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {
  categories: any;
  constructor(private categoryService: CategoryService) {}
  searchText;
  movies = [movies];
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}

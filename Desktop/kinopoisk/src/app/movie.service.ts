import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {movies} from './movies';
import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from './interfaces/Movie';
import { orderBy } from 'lodash';
@Pipe({ name: 'sortBy' })

export class SortByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (!column || column === '') {
      if (order === 'asc') {return value.sort(); } else {return value.sort().reverse(); }
    } // sort 1d array
    return orderBy(value, [column], [order]);
  }
}



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getMovie(id: number): Observable<any> {
    return of(movies.find(movie => movie.id === id));
  }

  getMovies(): Observable<any> {
    return of(movies);
  }

  getMoviesByCategoryId(id: number): Observable<any> {
    return of(movies.filter(movie => movie.category_id === id));
  }
  sortByRatingAsc(array: Movie[]): Observable<Movie[]> {
    array.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
    return of(array);
  }
  sortByRatingDesc(array: Movie[]): Observable<Movie[]> {
    array.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
    return of(array);
  }
//searchMovie


}

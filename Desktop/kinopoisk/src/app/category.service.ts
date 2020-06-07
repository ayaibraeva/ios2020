import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Category, LoginResponse} from './models';

import {categories} from './categories';





@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  constructor() { }


  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return of(categories);
  }









}

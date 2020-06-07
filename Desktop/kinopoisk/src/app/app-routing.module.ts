import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {CategoryComponent} from './category/category.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {FavoriteComponent} from './favorite/favorite.component';


const routes: Routes = [
  { path: 'movies', component: MovieListComponent},
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movie-id/:id', component: MovieItemComponent},
  { path: 'category/:id', component: CategoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'fav', component: FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

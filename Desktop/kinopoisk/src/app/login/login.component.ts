import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public categoryService : CategoryService) { }

  logged = false;
  username = ''
  password = ''


  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }


  login(){
    this.categoryService.login(this.username, this.password)
      .subscribe(res => {

        console.log(res);
        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

}

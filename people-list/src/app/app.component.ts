import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'PEOPLE LIST';

  constructor(private loginService:LoginService){}
  //ngOnInit after consteructor
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDGmaSPh5tn7QHoKwzPuZyeGZ0V1nLvmmE",
      authDomain: "people-list-cfbff.firebaseapp.com",
    })

  }

  isAuth(): boolean{
    return this.loginService.isAuth()
  }

  logout(): void{
    this.loginService.logout()
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  loggedInUser: string | null;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true
        this.loggedInUser = auth.email
      }else this.isLogged = false
    })
  }

  logout(): void{
    this.loginService.logout()
    this.isLogged = false
    this.router.navigate(['/login'])
  }


}

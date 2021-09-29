import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  loggedInUser: string | null;
  allowRegister: boolean

  constructor(private loginService: LoginService, private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true
        this.loggedInUser = auth.email
      }else this.isLogged = false
    })

    this.configService.getConfig().subscribe(
      config => {
        //@ts-ignore
        this.allowRegister = config.allowRegister
      }
    )
  }

  logout(): void{
    this.loginService.logout()
    this.isLogged = false
    this.router.navigate(['/login'])
  }


}

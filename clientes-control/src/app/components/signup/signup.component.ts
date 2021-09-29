import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private loginServive: LoginService
  ) {}

  ngOnInit(): void {
    this.loginServive.getAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/'])
      }
    })
  }

  register(){
    this.loginServive.register(this.email, this.password)
    .then(res => {
      this.router.navigate(['/'])
    }).catch(error => {
      this.flashMessages.show(error.message,{
        cssClass: 'alert-danger', timeout: 4000
      })
    })

  }

}

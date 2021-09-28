import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase'


@Injectable() //para inyectar otro servicio
export class LoginService{
    token: string | null

    constructor(private router: Router){}

    login(email: string, password: string): void{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token
                        this.router.navigate(['/'])
                    }
                )
            }       
        )
        
    }

    getIDToken(): string | null {
        return this.token
    }

    isAuth(): boolean{
        return this.token != null
    }

    logout(): void{
        firebase.auth().signOut().then(() => {
            this.token = null
            this.router.navigate(['/login'])
        }).catch(error => console.log(error))
    }
}
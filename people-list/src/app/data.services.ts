import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Person } from './Person.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient, private loginService: LoginService){}
    
    loadPeople(){
        const token = this.loginService.getIDToken()
        return this.httpClient.get('https://people-list-cfbff-default-rtdb.firebaseio.com/data.json?auth='+token)
    }

    //save people
    savePeople(people: Person[]){
        const token = this.loginService.getIDToken()
        this.httpClient.put('https://people-list-cfbff-default-rtdb.firebaseio.com/data.json?auth='+token, people)
        .subscribe(
            response => console.log("people saved: " + response),
            error => console.log("Error saving people: " + error)
            
        )
    }

    modifyPerson(index: number, person: Person){
        let url: string
        const token = this.loginService.getIDToken()
        url = "https://people-list-cfbff-default-rtdb.firebaseio.com/data/" + index + '.json?auth='+token
        this.httpClient.put(url, person)
            .subscribe(
                response => console.log("Result of modifying: " + response),
                error => console.log("Error Modifying: " + error)
            )
    }

    deletePerson(index: number): void{
        let url: string
        const token = this.loginService.getIDToken()
        url = "https://people-list-cfbff-default-rtdb.firebaseio.com/data/" + index + '.json?auth='+token
        this.httpClient.delete(url)
            .subscribe(
                response => console.log("Result of deleting: " + response),
                error => console.log("Error deleting: " + error)
            )
    }
}
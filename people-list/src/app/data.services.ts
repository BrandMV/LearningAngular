import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Person } from './Person.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}
    
    loadPeople(){
        return this.httpClient.get('https://people-list-cfbff-default-rtdb.firebaseio.com/data.json')
    }

    //save people
    savePeople(people: Person[]){
        this.httpClient.put('https://people-list-cfbff-default-rtdb.firebaseio.com/data.json', people)
        .subscribe(
            response => console.log("people saved: " + response),
            error => console.log("Error saving people: " + error)
            
        )
    }

    modifyPerson(index: number, person: Person){
        let url: string
        url = "https://people-list-cfbff-default-rtdb.firebaseio.com/data/" + index + '.json' 
        this.httpClient.put(url, person)
            .subscribe(
                response => console.log("Result of modifying: " + response),
                error => console.log("Error Modifying: " + error)
            )
    }
}
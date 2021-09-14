import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./Person.model";
//servicio de personas que agrega personas al arreglo

@Injectable() //para indicar que inyectaremos un servicio dentro de otro
export class PeopleService{
    people: Person[] = []
    greet = new EventEmitter<number>() //emite un evento

    constructor(private loggingService: LoggingService, private dataService: DataServices){}

    setPeople(people: Person[]){
        this.people = people
    }
    
    getPeople(){
        return this.dataService.loadPeople()
    }


    adPerson(person: Person): void {
        this.loggingService.sendMessage("Person added: " + person.name)
        if(this.people == null)
            this.people = []

        this.people.push(person)
        this.dataService.savePeople(this.people)
    }

    findPerson(index: number): Person{
        let person: Person = this.people[index];
        return person
    }

    modifyPerson(index: number, person: Person): void{
        let person1 = this.people[index]
        person1.name = person.name
        person1.lastName = person.lastName
        this.dataService.modifyPerson(index, person)
    }
    
    deletePerson(index: number): void{
        this.people.splice(index, 1);
    }
}
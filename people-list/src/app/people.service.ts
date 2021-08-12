import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./Person.model";
//servicio de personas que agrega personas al arreglo

@Injectable() //para indicar que inyectaremos un servicio dentro de otro
export class PeopleService{
    people: Person[] = [new Person('Brandon', 'Meza'), new Person('Lizeth', 'Rodriguez'), new Person('David', 'Meza')]
    greet = new EventEmitter<number>() //emite un evento

    constructor(private loggingService: LoggingService){}

    adPerson(person: Person): void {
        this.loggingService.sendMessage("Person added: " + person.name)
        this.people.push(person)
    }
}
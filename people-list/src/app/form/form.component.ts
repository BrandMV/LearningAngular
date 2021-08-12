import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PeopleService } from '../people.service';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  // @Output() createdPerson = new EventEmitter <Person>() //pasar de hijo a padre información

  nameInput: string = ''
  lastNameInput: string = ''
  // @ViewChild('refName') refName: ElementRef //recuperar informacion de la referencia local del input del formulario
  // @ViewChild('refLastName') refLastName: ElementRef //recuperar informacion de la referencia local del input del formulario
  
  //Dependency injection: inyectamos el servicio en nuestro constructor
  constructor(private loggingService: LoggingService, private peopleService: PeopleService){
      this.peopleService.greet.subscribe(
        (i: number) => alert('Index is: ' + (i+1))
      ) // nos suscribimos
  }

  addPerson(): void{
    let person = new Person(this.nameInput, this.lastNameInput)
    // this.createdPerson.emit(person)  //propagamos de hijo a padre
    this.peopleService.adPerson(person)
    this.nameInput = ''
    this.lastNameInput = ''
  }

}

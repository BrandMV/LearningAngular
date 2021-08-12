import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  @Output() createdPerson = new EventEmitter <Person>() //pasar de hijo a padre información

  nameInput: string = ''
  lastNameInput: string = ''

  addPerson(): void{
    let person = new Person(this.nameInput, this.lastNameInput)
    this.createdPerson.emit(person)  //propagamos de hijo a padre
  }

}

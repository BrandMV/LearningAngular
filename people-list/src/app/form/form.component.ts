import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  @Output() createdPerson = new EventEmitter <Person>() //pasar de hijo a padre información

  // nameInput: string = ''
  // lastNameInput: string = ''
  @ViewChild('refName') refName: ElementRef //recuperar informacion de la referencia local del input del formulario
  @ViewChild('refLastName') refLastName: ElementRef //recuperar informacion de la referencia local del input del formulario

  addPerson(): void{
    let person = new Person(this.refName.nativeElement.value, this.refLastName.nativeElement.value)
    this.createdPerson.emit(person)  //propagamos de hijo a padre
    this.refName.nativeElement.value = ''
    this.refLastName.nativeElement.value = ''
  }

}

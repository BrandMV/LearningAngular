import { Component } from '@angular/core';
import { Person } from './Person.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PEOPLE LIST';
  people: Person[] = [new Person('Brandon', 'Meza'), new Person('Lizeth', 'Rodriguez'), new Person('David', 'Meza')]
  nameInput: string = ''
  lastNameInput: string = ''

  addPerson(): void{
    let person = new Person(this.nameInput, this.lastNameInput)
    this.people.push(person)
  }
}

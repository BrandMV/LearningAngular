import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  name: string = "Brandon";
  lastName: string = "Meza";
  private age: number = 20;

  getAge(): number {
    return this.age
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../people.service';
import { Person } from '../../Person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person = new Person('','')
  @Input() i: number = 0

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }
  greetings(): void{
    this.peopleService.greet.emit(this.i)
  }

}

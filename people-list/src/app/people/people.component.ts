import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PeopleService } from '../people.service';
import { Person } from '../Person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[] = []

  constructor(private logginService: LoggingService, private peopleService: PeopleService){}
  //ngOnInit after consteructor
  ngOnInit(): void {
    this.people = this.peopleService.people
  }
}

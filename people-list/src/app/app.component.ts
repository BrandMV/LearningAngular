import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { PeopleService } from './people.service';
import { Person } from './Person.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'PEOPLE LIST';
  people: Person[] = []

  constructor(private logginService: LoggingService, private peopleService: PeopleService){}
  //ngOnInit after consteructor
  ngOnInit(): void {
    this.people = this.peopleService.people
  }
}

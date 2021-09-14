import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../Person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[] = []

  constructor(private peopleService: PeopleService, private router: Router){
    this.people = []
  }
  //ngOnInit after consteructor
  ngOnInit(): void {
    this.peopleService.getPeople()
    .subscribe(
      (people: any) => {
        this.people = people
        this.peopleService.setPeople(people)
      },
      
    )
  }

  add():void{
    this.router.navigate(['people/add'])
  }

  
}

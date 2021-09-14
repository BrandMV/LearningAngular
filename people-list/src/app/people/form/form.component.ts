import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { PeopleService } from '../../people.service';
import { Person } from '../../Person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  // @Output() createdPerson = new EventEmitter <Person>() //pasar de hijo a padre información

  nameInput: string = ''
  lastNameInput: string = ''
  index: number
  editMode: number
  // @ViewChild('refName') refName: ElementRef //recuperar informacion de la referencia local del input del formulario
  // @ViewChild('refLastName') refLastName: ElementRef //recuperar informacion de la referencia local del input del formulario
  
  //Dependency injection: inyectamos el servicio en nuestro constructor
  constructor(private loggingService: LoggingService, private peopleService: PeopleService, private router: Router, private route: ActivatedRoute){
      this.peopleService.greet.subscribe(
        (i: number) => alert('Index is: ' + (i+1))
      ) // nos suscribimos
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.editMode = +this.route.snapshot.queryParams['editMode']; //con + se pasa a tipo entero
    if(this.index){
      let person: Person = this.peopleService.findPerson(this.index)
      this.nameInput = person.name
      this.lastNameInput = person.lastName
    }
  }

  onSavePerson(): void{
    let person = new Person(this.nameInput, this.lastNameInput)
    // this.createdPerson.emit(person)  //propagamos de hijo a padre
    if(this.editMode != null && this.editMode === 1){
      this.peopleService.modifyPerson(this.index, person)
    }else{
      this.peopleService.adPerson(person)

    }
    this.router.navigate(['people'])
  }

  deletePerson(): void{
    if(this.editMode != null && this.editMode === 1){
      this.peopleService.deletePerson(this.index)
    }
    this.router.navigate(['people'])

  }
  
}

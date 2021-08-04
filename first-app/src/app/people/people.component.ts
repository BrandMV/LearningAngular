import { Component } from "@angular/core";

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
    // styles: [`
    //             h1{
    //                 color: blue;
    //             }
    //         `]
})

export class PeopleComponent{
    disable: boolean = false;
    message: string = 'Havent added a person'
    title: string = 'test'
    addPerson(): void{
        this.message = 'Person added successfully'
    }

    // modifyTitle(event: Event){
    //     this.title = (<HTMLInputElement>event.target).value
    // } eventBinding
}
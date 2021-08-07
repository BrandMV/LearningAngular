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
    message: string = ''
    title: string = 'Graduate'
    show: boolean = false
    addPerson(): void{
        this.show = true
        this.message = 'Person added successfully'
    }

    // modifyTitle(event: Event){
    //     this.title = (<HTMLInputElement>event.target).value
    // } eventBinding
}
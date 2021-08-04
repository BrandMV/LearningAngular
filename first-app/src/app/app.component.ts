import { Component } from '@angular/core';

let name: string = "Brandon"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = name;
  greeting = "Hola mijos";
}

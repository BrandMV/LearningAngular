import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic calculator';
 
  res: number = 0

  result(res: number):void{
    this.res = res
  }
}

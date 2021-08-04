import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic calculator';
  numberA: number = 0
  numberB : number = 0
  res: number = 0

  sum(): void {
   this.res = this.numberA + this.numberB
  }
  less(): void {
    this.res = this.numberA - this.numberB
   }
   divide(): void {
    this.res = this.numberA / this.numberB
   }
   mult(): void {
    this.res = this.numberA * this.numberB
   }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  numberA: number = 0;
  numberB: number = 0;

  @Output() resultOp = new EventEmitter<number>();

  sum(): void {
    let res = this.numberA + this.numberB;
    this.resultOp.emit(res);
  }
  less(): void {
    let res = this.numberA - this.numberB;
    this.resultOp.emit(res);
  }
  divide(): void {
    let res = this.numberA / this.numberB;
    this.resultOp.emit(res);
  }
  mult(): void {
    let res = this.numberA * this.numberB;
    this.resultOp.emit(res);
  }
}

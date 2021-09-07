import { Component, OnInit } from '@angular/core';
import { Expenses } from '../expenses/expenses.model';
import { ExpensesService } from '../expenses/expenses.service';
import { Incomes } from '../incomes/incomes.model';
import { IncomesService } from '../incomes/incomes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  type: string = 'incomeOperation';
  inputDescription: string
  inputValue: number;

  constructor(private incomeService:IncomesService, private expenseService:ExpensesService) {}

  ngOnInit(): void {}

  operationType(event): void {
    this.type = event.target.value;
  }
  addValue(): void{
    this.type === "incomeOperation" 
    ? this.incomeService.incomes.push(new Incomes(this.inputDescription, this.inputValue))
    : this.expenseService.expenses.push(new Expenses(this.inputDescription, this.inputValue))
  }
}

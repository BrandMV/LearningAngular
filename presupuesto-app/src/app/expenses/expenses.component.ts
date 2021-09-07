import { Component, Input, OnInit } from '@angular/core';
import { Expenses } from './expenses.model';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expenses[] = []
  @Input() totalIncome: number

  constructor(private expenseService: ExpensesService) { }

  ngOnInit(): void {
    this.expenses = this.expenseService.expenses
  }

  deleteExpense(expense: Expenses): void{
    this.expenseService.delete(expense)
  }

  calcPercentage(expense: Expenses){
    return expense.value / this.totalIncome
  }

}

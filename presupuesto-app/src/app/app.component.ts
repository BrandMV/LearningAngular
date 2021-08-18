import { Component } from '@angular/core';
import { Expenses } from './expenses/expenses.model';
import { ExpensesService } from './expenses/expenses.service';
import { Incomes } from './incomes/incomes.model';
import { IncomesService } from './incomes/incomes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incomes: Incomes[] = []  
  expenses: Expenses[] = []

  constructor(private incomeService: IncomesService, private expenseService: ExpensesService){
    this.incomes = incomeService.incomes
    this.expenses = expenseService.expenses
  }


  getTotalIncomes(){
    let totalIncome : number = 0
    this.incomes.map(i =>  totalIncome += i.value )
    return totalIncome
  }

  getTotalExpenses(){
    let totalExpense : number = 0
    this.expenses.map(e =>  totalExpense += e.value )
    return totalExpense
  }

  getPercentage(){
    return this.getTotalExpenses() / this.getTotalIncomes()
  }

  getTotalBudget(){
    return this.getTotalIncomes() - this.getTotalExpenses()
  }

}
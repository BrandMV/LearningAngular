import { Expenses } from "./expenses.model";

export class ExpensesService{
    expenses: Expenses[] = [
        new Expenses("clothes", 1000),
        new Expenses("buy", 800)
    ]

    delete(expense: Expenses){
        const index : number = this.expenses.indexOf(expense)
        this.expenses.splice(index, 1)
    }
}
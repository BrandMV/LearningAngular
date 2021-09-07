import { Incomes } from "./incomes.model";

export class IncomesService{
    incomes: Incomes[] = [
        new Incomes("Salary", 6000),
        new Incomes("bonus", 2000)
    ]


    delete(income: Incomes){
        const index:number = this.incomes.indexOf(income)
        this.incomes.splice(index, 1)
    }
}
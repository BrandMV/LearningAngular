import { Incomes } from "./incomes.model";

export class IncomesService{
    incomes: Incomes[] = [
        new Incomes("Salary", 6000),
        new Incomes("bonus", 2000)
    ]
}
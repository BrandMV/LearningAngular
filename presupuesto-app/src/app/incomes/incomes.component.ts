import { Component, OnInit } from '@angular/core';
import { Incomes } from './incomes.model';
import { IncomesService } from './incomes.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  incomes: Incomes[] = []

  constructor(private incomeService: IncomesService) { }

  ngOnInit(): void {
    this.incomes = this.incomeService.incomes
  }

  deleteRegister(income: Incomes): void{
    this.incomeService.delete(income)
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IncomesComponent } from './incomes/incomes.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FormComponent } from './form/form.component';
import { IncomesService } from './incomes/incomes.service';
import { ExpensesService } from './expenses/expenses.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncomesComponent,
    ExpensesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IncomesService, ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

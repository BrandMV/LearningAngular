import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent, PeopleComponent, PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //con esto funciona tqo way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { FlashMessagesModule } from 'angular2-flash-messages'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ConfigComponent } from './components/config/config.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FootPageComponent } from './components/foot-page/foot-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientService } from './services/client.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './gards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ClientsComponent,
    EditClientComponent,
    LoginComponent,
    SignupComponent,
    ConfigComponent,
    NotFoundComponent,
    FootPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore,'clients-control'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClientService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

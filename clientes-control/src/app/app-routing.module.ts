import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfigComponent } from "./components/config/config.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TableComponent } from "./components/table/table.component";


const routes: Routes = [
    { path: '', component: TableComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'client/edit/:id', component: EditClientComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
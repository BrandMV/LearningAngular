import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfigComponent } from "./components/config/config.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TableComponent } from "./components/table/table.component";
import { AuthGuard } from "./gards/auth.guard";
import { RegisterGuard } from "./gards/register.guard";


const routes: Routes = [
    { path: '', component: TableComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent, canActivate: [RegisterGuard] },
    { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
    { path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
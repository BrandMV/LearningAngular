import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "../services/config.service";

@Injectable()
export class RegisterGuard implements CanActivate{

    constructor(private router: Router, private afAuth: AngularFireAuth, private configService: ConfigService){}

    canActivate(): Observable<boolean>{
        return this.configService.getConfig().pipe(
            map((config) => {
                if(config.allowRegister)
                    return true
                else{
                    this.router.navigate(['/'])
                    return false
                }
            })
        )
    }    
}
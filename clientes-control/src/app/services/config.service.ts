import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Config } from "../modelo/config.model";


@Injectable()
export class ConfigService{
    configDoc: AngularFirestoreDocument<Config>
    config: Observable<Config>

    //only one id
    id = 1

    constructor(private db: AngularFirestore){}

    getConfig(): Observable<Config>{
        this.configDoc = this.db.doc<Config>(`config/${this.id}`)
        //@ts-ignore 
        this.config= this.configDoc.valueChanges()
        return this.config
    }
    modifyConfig(config: Config){
        this.configDoc = this.db.doc<Config>(`config/${this.id}`)
        this.configDoc.update(config)
    }
}
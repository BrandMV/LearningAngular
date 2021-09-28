import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Client } from "../modelo/client.model";
import { map } from "rxjs/operators";


@Injectable()
export class ClientService{
    clientsColecction: AngularFirestoreCollection<Client>
    clientDoc: AngularFirestoreDocument<Client>
    clients: Observable<Client[]>
    client: Observable<Client | null>

    constructor(private db: AngularFirestore){
        this.clientsColecction = db.collection('clients', ref => ref.orderBy('name','asc'))
    }

    getClients(): Observable<Client[]>{
        //get clients
        this.clients = this.clientsColecction.snapshotChanges().pipe(
            map( change => {
                return change.map( (action: any )=> {
                    const data = action.payload.doc.data() as Client
                    data.id = action.payload.doc.id
                    return data
                })
            })
        )
        return this.clients
    }

    addClient(client: Client): void{
        this.clientsColecction.add(client)
    }

    getClient(id: string): Observable<Client | null>{
        this.clientDoc = this.db.doc<Client>(`clients/${id}`)
        this.client = this.clientDoc.snapshotChanges().pipe(
            map( action =>{
                if(action.payload.exists === false)
                    return null
                else{
                    const data = action.payload.data() as Client
                    data.id = action.payload.id
                    return data
                }
            }

            )
        )
        return this.client
    }

    modify(client: Client): void{
        this.clientDoc = this.db.doc(`clients/${client.id}`)
        this.clientDoc.update(client)
    }

    delete(client: Client | null): void{
        this.clientDoc = this.db.doc(`clients/${client!.id}`)
        this.clientDoc.delete()
    }
}
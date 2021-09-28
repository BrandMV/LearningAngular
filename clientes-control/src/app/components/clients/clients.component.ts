import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/modelo/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  clients: Client[]

  //client interface
  client: Client ={
    name: '',
    lastname: '',
    email: '',
    credit: 0
  }

  @ViewChild("clientForm") clientForm: NgForm;
  @ViewChild("closeButton") closeButton: ElementRef;
  

  constructor(private clientsService: ClientService, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe(
      clients => {
        this.clients = clients
      }
    )
  }

  getTotalCredit(): number{
    let totalCredit: number = 0
    if(this.clients){
      this.clients.forEach(client =>{
        //@ts-ignore: Object is possibly 'undefined'
        totalCredit += client.credit
      })
    }

    return totalCredit
  }

  add({value, valid}:{value: Client, valid: boolean | null}){
    if(!valid){
        this.flashMessages.show("Full the form correctly",{
          cssClass: 'alert-danger', timeout: 4000
        })
    }else{
      //add new client
      this.clientsService.addClient(value);
      this.clientForm.resetForm()
      this.closeModal()
    }
    
  }

  private closeModal(): void{
    this.closeButton.nativeElement.click()
  }

}

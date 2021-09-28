import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/modelo/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  clients: Client[];

  //client interface
  client: Client | null = {
    name: '',
    lastname: '',
    email: '',
    credit: 0,
  };

  id: string

  constructor(
    private clientsService: ClientService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.clientsService.getClient(this.id).subscribe((client) => {
      this.client = client
    })
  }

  save({value, valid}: {value: Client, valid: boolean | null}) : void{
    if(!valid){
      this.flashMessages.show('Fill the form correctly',{
        cssClass: 'alert-danger', timeout: 4000
      })
    }else{
      value.id = this.id
      //modify cliente
      this.clientsService.modify(value)
      this.router.navigate(['/'])
    }
  }

  delete(){
    if(confirm("Really want to delete a cliente?")){
      this.clientsService.delete(this.client)
      this.router.navigate(['/'])
    }
  }
}

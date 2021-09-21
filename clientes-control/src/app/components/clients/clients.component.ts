import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modelo/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[]
  constructor(private clientsService: ClientService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe(
      clients => {
        this.clients = clients
      }
    )
  }

}

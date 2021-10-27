import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from 'src/app/models/Client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clients:Client[];
  constructor(private clientservice:ClientsService) { }

  ngOnInit(): void {
    this.clientservice.getClients().subscribe(clients =>
      this.clients=clients)
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data/client-data.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss'],
})
export class ClientManagementComponent implements OnInit {
  public clients: Client[] = [];

  constructor(private clientDataService: ClientDataService) {}

  ngOnInit() {
    this.clientDataService
      .get()
      .subscribe((clients: Client[]) => (this.clients = clients));
  }
}

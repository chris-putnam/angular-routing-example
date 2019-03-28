import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ClientDataService } from '../client-data/client-data.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-maintenance',
  templateUrl: './client-maintenance.component.html',
  styleUrls: ['./client-maintenance.component.scss'],
})
export class ClientMaintenanceComponent implements OnInit {
  client: Client;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clientDataService: ClientDataService,
  ) {}

  ngOnInit() {
    console.log('activated route', this.activatedRoute);
    combineLatest<Client[], Params>(
      this.clientDataService.get(),
      this.activatedRoute.params,
    ).subscribe((results: [Client[], Params]) => {
      console.log('results', results);
      const clients = results[0];
      const clientId = parseInt(results[1].id, 10);

      this.client = clients.find(c => c.id === clientId);
    });
  }
}

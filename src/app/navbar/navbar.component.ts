import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data/client-data.service';
import { Client } from '../models/client.model';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public links: Array<Link> = [];

  constructor(private clientDataService: ClientDataService) {}

  ngOnInit() {
    this.clientDataService.get().subscribe((clients: Client[]) => {
      // this is one approach to dynamic menus in angular
      // just populate an array of links depending on user role or something
      // all sensitive data on your screens should come from APIs and be restricted by user as well
      this.links = clients.map((client: Client) => {
        return {
          linkParts: ['/clients', client.id],
          text: client.name,
        };
      });
    });
  }
}

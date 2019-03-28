import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private hardcodedClientData: Client[] = [
    {
      id: 1,
      name: 'Acme Co',
      details:
        // tslint:disable-next-line: max-line-length
        'The Acme Corporation is a fictional corporation that features prominently in the Road Runner/Wile E. Coyote animated shorts as a running gag featuring outlandish products that fail or backfire catastrophically at the worst possible times. The name is also used as a generic title in many cartoons, especially those made by Warner Bros., and films, TV series, commercials and comic strips.',
      contact: 'Chuck Jones',
    },
    {
      id: 2,
      name: 'Weyland-Yutani Corporation',
      details:
        // tslint:disable-next-line: max-line-length
        `Weyland-Yutani is primarily a technology supplier, manufacturing synthetics, spaceships and computers for a wide range of industrial and commercial clients, making them a household name. Weyland-Yutani also has numerous non-manufacturing interests; the company has extensive assets in interplanetary shipping and transport, and is one of the corporations that operates human colonies outside the solar system through the Extrasolar Colonization Administration, which it owns or controls. The company also has a seat in the Interstellar Commerce Commission's Company Review Board, and owns or controls the United States Colonial Marine Corps. They hold their main offices in Tokyo, London, San Francisco, the Sea of Tranquillity on Luna and on Thedus.`,
      contact: 'Peter Weyland',
    },
    {
      id: 3,
      name: 'Shinra Electric Power Company',
      contact: 'Rufus Shinra',
      details:
        'A world-dominating megacorporation headquartered in the city of Midgar',
    },
  ];

  constructor() {}

  public get(): Observable<Client[]> {
    return of(this.hardcodedClientData);
  }
}

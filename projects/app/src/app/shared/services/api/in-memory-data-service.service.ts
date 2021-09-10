import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} | Observable<{[key: string]: any}> | Promise<{}> {
    const users = [
      {firstName: 'Iurii', lastName: 'Litvinov'}
    ];
    return {
      users,
      login: 'mytokenthebest',
    };
  }
}

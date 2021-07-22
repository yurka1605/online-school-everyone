import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  add(message: string): void {
    console.log(message);
  }

  warning(message: string): void {
    console.debug(message);
  }

  error(message: string): void {
    console.error(message);
  }
}

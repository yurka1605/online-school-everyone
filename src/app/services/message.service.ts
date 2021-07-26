import { Injectable } from '@angular/core';
import { MessageTypes } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = '';
  type: MessageTypes = MessageTypes.Warning;

  constructor() {}

  add(message: string): void {
    this.message = `Success: ${message}`;
    this.type = MessageTypes.Success;
    this.showMessage();
  }

  warning(message: string): void {
    this.message = `Warning: ${message}`;
    this.type = MessageTypes.Warning;
    this.showMessage();
  }

  error(message: string): void {
    this.message = `Error: ${message}`;
    this.type = MessageTypes.Error;
    this.showMessage();
  }

  showMessage(): void {
    switch (this.type) {
      case MessageTypes.Success:
        console.log(this.message);
        break;
      case MessageTypes.Warning:
        console.warn(this.message);
        break;
      case MessageTypes.Error:
        console.error(this.message);
        break;
      default:
        this.message = 'Handler missed';
        break;
    }
  }
}

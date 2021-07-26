import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { MessageService } from '@core/services/message.service';
import { MessageTypes } from '@app/app.constant';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: MessageTypes = MessageTypes.Error;

    return next.handle(req)
      .pipe(
        tap(
          event => ok = event instanceof HttpResponse ? MessageTypes.Success : MessageTypes.Warning,
          error => ok = MessageTypes.Error
        ),
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}" - ${ok} in ${elapsed} ms.`;

          switch (ok) {
            case MessageTypes.Success:
              this.messenger.add(msg);
              break;
            case MessageTypes.Warning:
              this.messenger.warning(msg);
              break;
            case MessageTypes.Error:
              this.messenger.error(msg);
              break;
            default:
              break;
          }
        })
      );
  }
}

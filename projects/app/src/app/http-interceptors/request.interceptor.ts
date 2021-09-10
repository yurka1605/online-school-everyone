import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@app/core/services/auth.service';
import { BASE_API_URL } from '@app/app.constant';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq: {
      headers?: HttpHeaders,
      params?: HttpParams,
      url: string,
    } = {
      url: `${BASE_API_URL}${req.url}`
    };

    if (!req.url.match('login')) {
      newReq.headers = req.headers.set('Authorization', this.auth.getAuthorizationToken());
    }

    return next.handle(req.clone(newReq));
  }
}

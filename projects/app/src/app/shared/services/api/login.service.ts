import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '@app/app.constant';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
  ) { }

  login(): Observable<string> {
    return this.http.post<string>(API_URLS.POST.LOGIN, {
      login: 'iurii',
      password: 'litvinov',
    }).pipe(retry(1));
  }
}

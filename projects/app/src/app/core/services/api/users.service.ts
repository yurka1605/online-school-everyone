import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_URLS } from '@app/app.constant';

interface INewUser {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  repos_url: string;
  type: string;
  site_admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) {}

  getUsers(): Observable<INewUser[]> {
    return this.http.get<INewUser[]>(API_URLS.GET.USERS)
      .pipe(
        catchError(err => EMPTY)
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_URLS, BASE_API_URL } from './../../app.constant';

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
    return this.http
      .get<INewUser[]>(`${BASE_API_URL}${API_URLS.GET_USERS}`)
      .pipe(
        catchError((err) => {
          console.log(err);
          return EMPTY;
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, fromToken } from '@app/store/';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token$ = this.store.select(fromToken.selectAuthetification);

  constructor(
    private router: Router,
    private readonly store: Store<AppState>,
  ) {}

  canActivate(): Observable<boolean> {
    return this.token$.pipe(tap(isAuth => {
      if (!isAuth) {
        this.router.navigate(['auth']);
      }
      return isAuth;
    }));
  }
}

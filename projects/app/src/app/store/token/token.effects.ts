import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Observable, of } from 'rxjs';

import { getToken, getTokenSuccessfull, getTokenFailed } from './token.action';
import { LoginService } from '@app/shared/services/api/login.service';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class Effects {

  loadToken$: Observable<Action> = createEffect(this.createLoadTokenEffect.bind(this));

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
  ) {}

  private createLoadTokenEffect() {
    return this.actions$.pipe(
      ofType(getToken),
      mergeMap(() =>
        this.loginService.login().pipe(
          map(token => getTokenSuccessfull({token})),
          catchError((error: HttpErrorResponse) => of(getTokenFailed({error: JSON.stringify(error)}))),
        ),
      )
    );
  }
}

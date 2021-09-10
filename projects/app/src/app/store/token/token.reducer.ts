import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, createSelector, MemoizedSelector, on } from '@ngrx/store';
import { AppState } from '../state';
import * as TokenActions from './token.action';

export interface State {
  isAuth: boolean;
  token: string | null;
  error: string | null;
}

export const initialState: State = {
  isAuth: false,
  token: null,
  error: null,
};

export const tokenReducer = createReducer<State>(
  initialState,
  on(
    TokenActions.getToken,
    (state: State): State => ({...state}),
  ),
  on(
    TokenActions.getTokenSuccessfull,
    (state, {token}): State => ({...state, token: token || null, isAuth: !!token })
  ),
  on(
    TokenActions.getTokenFailed,
    (state: State, { error }): State => {
      return {
        ...state,
        error: (JSON.parse(error) as HttpErrorResponse).message,
      }
    }
  ),
  on(
    TokenActions.deleteToken,
    (state: State): State => ({...initialState}),
  ),
  on(
    TokenActions.deleteTokenSuccessfull,
    (state: State): State => ({...initialState}),
  ),
  on(
    TokenActions.deleteTokenFailed,
    (state: State, { error }): State => ({...state, error: (JSON.parse(error) as HttpErrorResponse).message,}),
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return tokenReducer(state, action);
}

// Selectors
export const selectAuthData = (state: AppState): State => state.authData;

export const selectAuthetification: MemoizedSelector<AppState, boolean> = createSelector(
  selectAuthData,
  (data: State) => data.isAuth
);

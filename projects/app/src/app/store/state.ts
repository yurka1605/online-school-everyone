import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromToken from "./token";
import * as fromTheme from "./theme";

export interface AppState {
  themeData: fromTheme.State;
  authData: fromToken.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
  authData: fromToken.reducer,
  themeData: fromTheme.reducer,
};

export const AppEffects = [
  fromToken.Effects,
];

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return <ActionReducer<AppState>>function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [debug];


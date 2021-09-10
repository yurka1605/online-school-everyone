import { Action, createReducer, on } from '@ngrx/store';
import { Themes } from '@ui-lib';
import * as ThemeActions from './theme.action';

export interface State {
  theme: Themes;
}

const initialState: State = {
  theme: Themes.Default,
};

export const themeReducer = createReducer<State>(
  initialState,
  on(
    ThemeActions.getTheme,
    (state: State): State => ({...state}),
  ),
  on(
    ThemeActions.changeTheme,
    (state: State, {theme}): State => ({theme})
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return themeReducer(state, action);
}


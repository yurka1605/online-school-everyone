import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromUsers from './users';

export interface State {
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<State, any> = {
  users: fromUsers.reducer
};

export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return <ActionReducer<State>>function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [debug];

const selectUsers = (state: State) => state.users;
export const selectUsersCount = createSelector(
  selectUsers,
  (users: fromUsers.State) => users.count
);

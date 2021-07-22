import * as userAction from '../actions/users';
import { IUser } from '../../models/users.model';

export interface State {
  count: number;
  items: Array<IUser>;
  isLoaded?: boolean;
}

const initialState: State = {
  items: [],
  isLoaded: false,
  count: 0,
};

export function reducer(
  state = initialState,
  action: userAction.UsersUnion
): State {
  switch (action.type) {
    case userAction.Actions.GetUsers:
      return {
        ...state,
        items: [],
      };
    case userAction.Actions.AddUser:
      const newUser: IUser = action.payload;
      return {
        ...state,
        items: [...state.items, newUser],
        count: state.count + 1
      };
    case userAction.Actions.DeleteUser:
      const currentUsers = state.items.filter(user => user.id !== action.payload.id);
      return {
        ...state,
        items: currentUsers,
        count: currentUsers.length,
      };
    case userAction.Actions.DeleteUsers:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

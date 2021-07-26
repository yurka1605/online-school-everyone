import { IUser } from '@shared/models/users.model';
import { Action } from "@ngrx/store";


export enum Actions {
  AddUser = '[Users Page] AddUser',
  GetUsers = '[Users Page] GetUsers',
  DeleteUser = '[Users Page] DeleteUser',
  DeleteUsers = '[Users Page] DeleteUsers',
}

export class GetUsers implements Action {
  readonly type = Actions.GetUsers;
}

export class AddUser implements Action {
  readonly type = Actions.AddUser;

  constructor(public payload: IUser) {}
}

export class DeleteUser implements Action {
  readonly type = Actions.DeleteUser;

  constructor(public payload: { id: string }) {}
}

export class DeleteUsers implements Action {
  readonly type = Actions.DeleteUsers;
}

export type UsersUnion =
  | AddUser
  | GetUsers
  | DeleteUser
  | DeleteUsers;

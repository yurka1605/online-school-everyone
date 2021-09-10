import { environment } from "../environments/environment";

export const BASE_API_URL = environment.BASE_API_URL;

export enum MessageTypes {
  Error = 'ERROR',
  Warning = 'WARNING',
  Success = 'SUCCESS'
};

export enum KeyboardKeys {
  None = 0,
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Escape = 27,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
  Delete = 46,
};

export const API_URLS: {
  GET: IGetRequests,
  POST: IPostRequests,
} = Object.freeze({
  GET: {
    USERS: 'api/users',
  },
  POST: {
    LOGIN: 'api/login',
  }
});

interface IGetRequests {
  USERS: string;
}

interface IPostRequests {
  LOGIN: string;
}

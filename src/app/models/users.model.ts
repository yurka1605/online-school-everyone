export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone?: number;
  birthdate?: string;
  school_ids: Array<string>;
}

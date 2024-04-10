export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUsers {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

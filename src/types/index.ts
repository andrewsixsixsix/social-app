export interface IApiError {
  status: number;
  message: string;
}

export interface ISignup {
  username: string;
  email: string;
  firstName: string;
  lastName: string | null;
  dateOfBirth: string;
  password: string;
  passwordConfirmation: string;
}

export interface IUser {
  firstName: string;
  lastName: string | null;
  username: string;
  email: string;
  dateOfBirth: string;
}

export type AsyncStorageKey = 'AUTH_TOKEN';

export type Theme = {
  background: string;
  buttonText: string;
  disabled: string;
  error: string;
  placeholder: string;
  primary: string;
  text: string;
};

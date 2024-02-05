export interface ISignup {
  username: string;
  email: string;
  firstName: string;
  lastName: string | null;
  dateOfBirth: string;
  password: string;
  passwordConfirmation: string;
}

export type Theme = {
  background: string;
  buttonText: string;
  disabled: string;
  error: string;
  placeholder: string;
  primary: string;
  text: string;
};

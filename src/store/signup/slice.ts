import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISignup } from '@types';
import { RootState } from '../index';

type TPayloadActionString = PayloadAction<string>;
type TPayloadActionName = PayloadAction<{
  firstName: ISignup['firstName'];
  lastName: ISignup['lastName'];
}>;
type TPayloadActionPassword = PayloadAction<{
  password: ISignup['password'];
  passwordConfirmation: ISignup['passwordConfirmation'];
}>;

const initialState: ISignup = {
  username: '',
  email: '',
  firstName: '',
  lastName: null,
  dateOfBirth: '',
  password: '',
  passwordConfirmation: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    username: (state, action: TPayloadActionString) => {
      state.username = action.payload;
    },
    email: (state, action: TPayloadActionString) => {
      state.email = action.payload;
    },
    name: (state, action: TPayloadActionName) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    dateOfBirth: (state, action: TPayloadActionString) => {
      state.dateOfBirth = action.payload;
    },
    password: (state, action: TPayloadActionPassword) => {
      state.password = action.payload.password;
      state.passwordConfirmation = action.payload.passwordConfirmation;
    },
  },
});

export const { username, email, name, dateOfBirth, password } = signupSlice.actions;

export const selectSignup = (state: RootState) => state.signup;

export const signupReducer = signupSlice.reducer;

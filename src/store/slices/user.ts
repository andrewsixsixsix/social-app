import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/types';
import { RootState } from '@/store';

const initialState: IUser = {
  firstName: '',
  lastName: null,
  username: '',
  email: '',
  dateOfBirth: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.dateOfBirth = action.payload.dateOfBirth;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;

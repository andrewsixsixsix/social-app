import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '@/api/auth';
import { userApi } from '@/api/user';
import { signupReducer } from './slices/auth';
import { userReducer } from '@/store/slices/user';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    signup: signupReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

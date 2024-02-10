import { configureStore } from '@reduxjs/toolkit';

import { signupReducer } from './slices/auth';
import { authApi } from '@/api/auth';
import { userReducer } from '@/store/slices/user';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    signup: signupReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

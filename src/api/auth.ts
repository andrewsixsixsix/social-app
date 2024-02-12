import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ISignup, IUser } from '@/types';
import { http } from '@/constants';
import { asyncStorage } from '@/utils';

interface ILoginRequest {
  username: string;
  password: string;
}

interface ILoginResponse {
  user: IUser;
  authToken: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6969/api/v1',
    prepareHeaders: async (headers) => {
      const authToken = (await asyncStorage.getAuthToken()) ?? '';
      headers.set(http.headers.AUTHORIZATION, authToken);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (user: IUser, meta, _) => {
        const authToken = meta?.response?.headers.get(http.headers.AUTHORIZATION) ?? '';
        return { user, authToken };
      },
    }),
    signup: builder.mutation<ILoginResponse, ISignup>({
      query: (signup) => ({
        url: '/auth/register',
        method: 'POST',
        body: signup,
      }),
      transformResponse: (user: IUser, meta, _) => {
        const authToken = meta?.response?.headers.get(http.headers.AUTHORIZATION) ?? '';
        return { user, authToken };
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ISignup, IUser } from '@/types';
import { http } from '@/constants';

interface ILogin {
  username: string;
  password: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6969/api/v1',
    prepareHeaders: (headers) => {
      const token = '';
      if (token) {
        headers.set(http.headers.AUTHORIZATION, `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ user: IUser; token: string }, ILogin>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (user: IUser, meta, _) => {
        const token = meta?.response?.headers.get(http.headers.AUTHORIZATION) ?? '';
        return { user, token };
      },
    }),
    signup: builder.mutation<void, ISignup>({
      query: (signup) => ({
        url: '/auth/register',
        method: 'POST',
        body: signup,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = api;

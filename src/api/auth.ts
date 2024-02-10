import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ISignup, IUser } from '@/types';
import { http } from '@/constants';

interface ILoginRequest {
  username: string;
  password: string;
}

interface ILoginResponse {
  user: IUser;
  token: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6969/api/v1',
    prepareHeaders: (headers) => {
      const token = ''; // 'Bearer ...'
      if (token) {
        headers.set(http.headers.AUTHORIZATION, token);
      }
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
        const token = meta?.response?.headers.get(http.headers.AUTHORIZATION) ?? '';
        return { user, token };
      },
    }),
    signup: builder.mutation<ILoginResponse, ISignup>({
      query: (signup) => ({
        url: '/auth/register',
        method: 'POST',
        body: signup,
      }),
      transformResponse: (user: IUser, meta, _) => {
        const token = meta?.response?.headers.get(http.headers.AUTHORIZATION) ?? '';
        return { user, token };
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;

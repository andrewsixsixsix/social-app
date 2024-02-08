import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISignup } from '@/types';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6969/api/v1',
    prepareHeaders: (headers) => {
      const token = '';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<void, ISignup>({
      query: (signup) => ({
        url: '/auth/register',
        method: 'POST',
        body: signup,
      }),
    }),
  }),
});

export const { useSignupMutation } = api;

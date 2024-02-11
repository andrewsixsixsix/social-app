import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { http } from '@/constants';

interface IUsernameExists {
  username: string;
}

interface IEmailExists {
  email: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6969/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = ''; // 'Bearer ...'
      if (token) {
        headers.set(http.headers.AUTHORIZATION, token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    isUsernameExists: builder.mutation<void, IUsernameExists>({
      query: (username) => ({
        url: '/users/check-username',
        method: 'POST',
        body: username,
      }),
      transformErrorResponse: (err) => err.data,
    }),
    isEmailExists: builder.mutation<void, IEmailExists>({
      query: (email) => ({
        url: '/users/check-email',
        method: 'POST',
        body: email,
      }),
      transformErrorResponse: (err) => err.data,
    }),
  }),
});

export const { useIsUsernameExistsMutation, useIsEmailExistsMutation } = userApi;

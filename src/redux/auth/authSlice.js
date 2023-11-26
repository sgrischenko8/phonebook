import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phonebook-backend-2d7j.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;
      if (token === '') {
        console.log('empty');
        headers.set('authorization', 'Bear');
        return;
      } else {
        console.log('est');
        headers.set('authorization', `Bearer ${token}`);
      }
      console.log('see');
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    checkUser: builder.query({
      query: () => '/users/current',
      providesTags: ['user'],
    }),
    register: builder.mutation({
      query: (values) => ({
        url: '/users/register',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Auth'],
    }),
    verify: builder.mutation({
      query: (verificationToken) => ({
        url: `/users/register/${verificationToken}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation({
      query: (values) => ({
        url: '/users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useCheckUserQuery,
  useRegisterMutation,
  useVerifyMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;

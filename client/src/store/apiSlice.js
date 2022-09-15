// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags: ['transaction']
        }),
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
            url:'/api/transaction',
            method: "POST",
            body: initialTransaction }),
            invalidatesTags: ['transaction'],
        deleteTransaction: builder.mutation({
            query: recordID => ({
            url: '/api/transaction',
            method: "DELETE",
            body: recordID
        }),
        invalidatesTags: ['transaction']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default apiSlice;

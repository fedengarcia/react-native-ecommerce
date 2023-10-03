import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { apiKey, authUrl } from '../firebase/firebase'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: authUrl
    }),
    endpoints: (builder) => ({
        singUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signUp?Key=${apiKey}`,
                method: 'POST',
                body: auth
            })
        })
    })
})

export const {} = shopApi
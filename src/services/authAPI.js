import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { apiKey, authUrl } from '../firebase/firebase'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: authUrl
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: 'POST',
                body: auth
            })
        }),
        login: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: 'POST',
                body: auth
            })
        }),
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`
        }),
        postProfileImage: builder.mutation({
            query: ({image,localId}) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {
                    image
                }
            })
        })
    })
})

export const {
    useSignUpMutation,
    useLoginMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = authApi;
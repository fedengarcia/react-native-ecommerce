import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../firebase/firebase'


export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getOrders: builder.query({
            query: (user) => `orders.json?orderBy="user"&equalTo="${user}`
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
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
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    useGetOrdersQuery,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = shopApi
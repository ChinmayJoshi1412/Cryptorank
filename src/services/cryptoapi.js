import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Header } from 'antd/es/layout/layout';

const cryptoApiHeaders = {
    'x-rapidapi-key': '584cceb2a3msh2a45aebf78a8b5ap1f311ajsn84e757754edd',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest= (url)=>({url,headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query:(id)=>createRequest(`coin/${id}`)
        }),
        getCryptoHistory: builder.query({
            query:({coinId,timeperiod})=>createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`)
        })
    })
})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;
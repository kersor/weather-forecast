import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IEmpty } from '../../types/Types';

const API_KEY = ''


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: (builder) => ({
        getWeather: builder.query<IEmpty, string>({
            query: (city) => ({
                url: 'v1/forecast.json',
                params: {
                    key: API_KEY,
                    q: city
                }
            })
        }),
    }),   
})

export const { useGetWeatherQuery } = weatherApi;
export default weatherApi;
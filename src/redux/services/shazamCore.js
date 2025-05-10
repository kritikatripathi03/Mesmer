import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '1077b66976msh5d8361f8b705376p1283cajsn12addf036326');
      
      return headers;
    },
  }),
  endpoints: (builder) => ({
     getTopCharts: builder.query({query: () => '/search/multi?offset=0&search_type=SONGS_ARTISTS&query=metallica'}),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
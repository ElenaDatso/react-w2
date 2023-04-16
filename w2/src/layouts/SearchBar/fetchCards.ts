import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PhotoData from '../../interfaces/PhotoData';

const API_KEY = 'ad3ad555dd3292925321ec36efca1184';

export const flickrApi = createApi({
  reducerPath: 'fetchCards',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flickr.com/services/rest/',
  }),
  endpoints: (builder) => ({
    getSearchData: builder.query<PhotoData, string>({
      query: (searchValue) =>
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${searchValue}&format=json&nojsoncallback=1`,
    }),
  }),
});

export const { useGetSearchDataQuery } = flickrApi;

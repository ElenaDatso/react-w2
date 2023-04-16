import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PhotoData from '../interfaces/PhotoData';
import PhotoInfo from '../interfaces/PhotoInfo';
import { flickrApi } from '../layouts/SearchBar/fetchCards';

const API_KEY = 'ad3ad555dd3292925321ec36efca1184';
const BASE_URL = 'https://api.flickr.com/services/rest/';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  tagTypes: ['PhotoData', 'PhotoInfo'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers: Headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getPhotoData: builder.query<PhotoData[], string>({
        query: (searchValue) =>
          `${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&text=${searchValue}&format=json&nojsoncallback=1`,
        transformResponse: (response: { photos: { photo: PhotoData[] } }) =>
          response.photos.photo as PhotoData[],
        providesTags: (result) =>
          result ? result.map(({ id }) => ({ type: 'PhotoData', id })) : [],
      }),
      getPhotoInfo: builder.query<PhotoInfo, string>({
        query: (photoId) =>
          `${BASE_URL}?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`,
        transformResponse: (response: { photo: PhotoInfo }) => response.photo as PhotoInfo,
        providesTags: (result) => (result ? [{ type: 'PhotoInfo', id: result.dateuploaded }] : []),
      }),
    };
  },
});

export const { useGetPhotoDataQuery, useGetPhotoInfoQuery } = photoApi;
export default photoApi;

// import axios from 'axios';
// import PhotoData from '../interfaces/PhotoData';
// import PhotoInfo from '../interfaces/PhotoInfo';

// export default function () {
//   const API_KEY = 'ad3ad555dd3292925321ec36efca1184';
//   const BASE_URL = 'https://api.flickr.com/services/rest/';
//   return {
//     getPhotoData(searchValue: string) {
//       return axios.get<{ photos: { photo: PhotoData[] } }>(
//         `${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&text=${searchValue}&format=json&nojsoncallback=1`
//       );
//     },
//     getPhotoInfo(photoId: string) {
//       return axios.get<{ photo: PhotoInfo }>(
//         `${BASE_URL}?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`
//       );
//     },
//   };
// }

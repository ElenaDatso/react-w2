import axios from 'axios';
import PhotoData from '../interfaces/PhotoData';

interface GetPhotoInfoResponse {
  photo: {
    [string: string]: string;
  };
}

export default function () {
  const API_KEY = 'ad3ad555dd3292925321ec36efca1184';
  const SECRET = '4813e86cfae41ccd';
  const BASE_URL = 'https://api.flickr.com/services/rest/';
  return {
    getPhotoData(searchValue: string) {
      return axios.get<{ photos: { photo: PhotoData[] } }>(
        `${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&text=${searchValue}&format=json&nojsoncallback=1`
      );
    },
    getPhotoInfo(photoId: string) {
      return axios.get<GetPhotoInfoResponse>(
        `${BASE_URL}?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`
      );
    },
    getOwnerData(ownerId: string) {
      return axios.get<{ person: { username: { _content: string } } }>(
        `${BASE_URL}?method=flickr.people.getInfo&api_key=${API_KEY}&user_id=${ownerId}&format=json&nojsoncallback=1`
      );
    },
    getTags(photoId: string) {
      return axios.get<{
        photo: { tags: { tag: { id: string; author: string; authorname: string } } };
      }>(
        `${BASE_URL}?method=flickr.tags.getListPhoto&api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`
      );
    },
    getStats(photoId: string) {
      const now = new Date(Date.now());
      console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);
      return axios.get<{
        stat: { views: string; comments: string; favorites: string };
      }>(
        `${BASE_URL}?method=flickr.stats.getPhotoStats&api_key=${API_KEY}&secret=${SECRET}&date=${now.getFullYear()}-0${now.getMonth()}-0${now.getDate()}&photo_id=${photoId}&format=json&nojsoncallback=1`
      );
    },
  };
}

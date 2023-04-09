import React from 'react';
import axios from 'axios';

type SearchResult = {
  id: string;
  title: string;
  url: string;
};

async function Flickr(props: string) {
  const API_KEY = 'ad3ad555dd3292925321ec36efca1184';
  const SECRET = '4813e86cfae41ccd';
  const response = await axios.get<{ photos: { photo: SearchResult[] } }>(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${props}&format=json&nojsoncallback=1`
  );
  console.log(response.data.photos.photo);
  return response.data.photos.photo;
}

export default Flickr;

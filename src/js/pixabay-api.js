import axios from 'axios';
import { clearGallery, hideLoader, showLoader } from './render-functions';


export let totalElem;
export let perPage = 15;

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    q: query,
    key: '51658185-19ae36e73b0aa030a4154053e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page:perPage
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return axios.get(url).then(response => {
    // console.log(response.data.total);
    totalElem = response.data.total;
    return response.data.hits
  });
}

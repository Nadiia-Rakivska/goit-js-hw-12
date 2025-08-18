import { getImagesByQuery, perPage } from './js/pixabay-api';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

export const refs = {
  galleryElem: document.querySelector('.gallery'),
  loaderJs: document.querySelector('.loader-js'),
  formEl: document.querySelector('.form'),
  loadMore: document.querySelector('.loadMore'),
};
let page = 1;
let query = '';
let totalPage = 0;
let totalElem = 0;

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements['search-text'].value.trim();
 
  if (query.length === 0) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
   page = 1;
   showLoader();
 clearGallery();
 hideLoadMoreButton();
  try {
    const images = await getImagesByQuery(query, page);
    totalElem = images.totalHits;
    totalPage = Math.ceil(totalElem / perPage);
    if (images.hits.length > 0) {
      createGallery(images.hits);
      if (images.hits.length > 0 && totalPage > page) {
        showLoadMoreButton();
      }
   
    } else {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        icon: 'error',
        backgroundColor: '#ef4040',
        iconColor: 'white',
        messageColor: 'white',
      });
      hideLoadMoreButton();
    }
    
  } catch (error) {
    iziToast.error({
      message: `Error: ${error}`,
      position: 'topRight',
      icon: 'error',
      backgroundColor: '#ef4040',
      iconColor: 'white',
      messageColor: 'white',
    });
  }
   e.target.reset();
  hideLoader();
});
refs.loadMore.addEventListener('click', async () => {
  hideLoadMoreButton();
  showLoader();
  page += 1;
  try {
    const images = await getImagesByQuery(query, page);
    totalElem = images.totalHits;
    totalPage = Math.ceil(totalElem / perPage);
    if (images.hits.length > 0) {
      createGallery(images.hits);
       if (page>=totalPage) {
         hideLoader();
         hideLoadMoreButton();
         iziToast.info({
           message: `We're sorry, but you've reached the end of search results.`,
         });
         return;
       } else {
         showLoadMoreButton();
       }
      const cardElems = document.querySelectorAll('.gallery-item');
      const cardElem = cardElems[cardElems.length - 1];
      let rect = cardElem.getBoundingClientRect();
      window.scrollBy({
        top: rect.height * 2,
        behavior: 'smooth',
      });
    }
   
  } catch {
    iziToast.error({
      message: 'Download error',
      position: 'topRight',
      icon: 'error',
      backgroundColor: '#ef4040',
      iconColor: 'white',
      messageColor: 'white',
    });
  }

  
  hideLoader();
});

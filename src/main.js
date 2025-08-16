import { getImagesByQuery, perPage, totalElem } from './js/pixabay-api';
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
let query = "";
let totalPage = 0;

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
 query = e.target.elements['search-text'].value.trim();
  clearGallery();
  page = 1;
  if (query.length !== 0) {
     showLoader();
    const images = await getImagesByQuery(query, page);
    totalPage = Math.ceil(totalElem / perPage);
    addToGallery(images);
        hideLoader();
  }
   if (totalPage > page) {
     showLoadMoreButton();
   }
  e.target.reset();
 
});
refs.loadMore.addEventListener("click", async e => {
  page += 1;
  const images = await getImagesByQuery(query, page);
  addToGallery(images);
  if (totalPage<=page) {
    hideLoadMoreButton();
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
    });

  }  
  const cardElems = document.querySelectorAll('.gallery-item');
  const cardElem = cardElems[cardElems.length - 1];
    let rect = cardElem.getBoundingClientRect();
  window.scrollBy({
    top: rect.height *2 ,
    behavior: 'smooth',
  });
  
})

function addToGallery(images) {
   try {
     if (images.length > 0) {
       createGallery(images);
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
     }
   } catch {
     iziToast.error({
       message:
         'Sorry, there are no images matching your search query. Please try again!',
       position: 'topRight',
       icon: 'error',
       backgroundColor: '#ef4040',
       iconColor: 'white',
       messageColor: 'white',
     });
   }
}
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

// refs.formEl.addEventListener('submit', async e => {
//   e.preventDefault();
//   query = e.target.elements['search-text'].value.trim();
//   clearGallery();
//   hideLoadMoreButton();
//   page = 1;
//   showLoader();
//   if (query.length === 0) {
//     iziToast.warning({
//       message: 'Please enter a search query!',
//       position: 'topRight',
//     });
//     return;
//   }

//   try {
//     const images = await getImagesByQuery(query, page);
//     totalElem = images.totalHits;
//     totalPage = Math.ceil(totalElem / perPage);
//     if (images.hits.length > 0) {
//       createGallery(images.hits);
//       if (images.hits.length > 0 && totalPage > page) {
//         console.log(images.hits.length);
//         showLoadMoreButton();
//       }
//     } else {
//       iziToast.error({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//         icon: 'error',
//         backgroundColor: '#ef4040',
//         iconColor: 'white',
//         messageColor: 'white',
//       });
//       hideLoadMoreButton();
//     }
//   } catch (error) {
//     iziToast.error({
//       message: `Error: ${error}`,
//       position: 'topRight',
//       icon: 'error',
//       backgroundColor: '#ef4040',
//       iconColor: 'white',
//       messageColor: 'white',
//     });
//   }

//   hideLoader();
//   e.target.reset();
// });
// refs.loadMore.addEventListener('click', async () => {
//   hideLoadMoreButton();
//   showLoader();
//   page += 1;
//   try {
//     const images = await getImagesByQuery(query, page);
//     totalElem = images.totalHits;
//     totalPage = Math.ceil(totalElem / perPage);
//     if (images.hits.length > 0) {
//       createGallery(images.hits);
//       const cardElems = document.querySelectorAll('.gallery-item');
//       const cardElem = cardElems[cardElems.length - 1];
//       let rect = cardElem.getBoundingClientRect();
//       window.scrollBy({
//         top: rect.height * 2,
//         behavior: 'smooth',
//       });
//     } else {
//       hideLoadMoreButton();
//     }
//     if (totalPage <= page) {
//       hideLoadMoreButton();
//       iziToast.info({
//         message: `We're sorry, but you've reached the end of search results.`,
//       });
//       return;
//     } else {
//       showLoadMoreButton();
//     }
//   } catch {
//     iziToast.error({
//       message: 'Download error',
//       position: 'topRight',
//       icon: 'error',
//       backgroundColor: '#ef4040',
//       iconColor: 'white',
//       messageColor: 'white',
//     });
//   }

  
//   hideLoader();
// });
refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements['search-text'].value.trim();
  clearGallery();
  hideLoadMoreButton();
  page = 1;
  showLoader();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  try {
    const images = await getImagesByQuery(query, page);
    totalElem = images.totalHits;
    totalPage = Math.ceil(totalElem / perPage);

    if (!images.hits.length) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
        icon: 'error',
        backgroundColor: '#ef4040',
        iconColor: 'white',
        messageColor: 'white',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(images.hits);

    if (totalPage > page) {
      showLoadMoreButton();
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
    hideLoader();
    e.target.reset();
  
});

refs.loadMore.addEventListener('click', async () => {
  hideLoadMoreButton();
  showLoader();
  page += 1;

  try {
    const images = await getImagesByQuery(query, page);
    totalElem = images.totalHits;
    totalPage = Math.ceil(totalElem / perPage);

    if (!images.hits.length) {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      return;
    }

    createGallery(images.hits);

    const cardElems = document.querySelectorAll('.gallery-item');
    const cardElem = cardElems[cardElems.length - 1];
    if (cardElem) {
      window.scrollBy({
        top: cardElem.getBoundingClientRect().height * 2,
        behavior: 'smooth',
      });
    }

    if (totalPage > page) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
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
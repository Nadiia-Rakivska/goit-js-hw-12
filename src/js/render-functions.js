
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';


   let simpleLightbox;
export function createGallery(images){
  const markup = images
    .map(
      e =>
        `<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width="360" height="152"
      />  </a>
      <ul class="gallery-list">
      <li class="gallery-item-desc"><p  class="gallery-descr">Likes</p>
      <p  class="gallery-count">${e.likes}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Views</p>
      <p class="gallery-count">${e.views}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Comments</p>
      <p class="gallery-count">${e.comments}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Downloads</p>
      <p class="gallery-count">${e.downloads}</p>
      </li>
      </ul>
    </li>`
    )
    .join('');
  refs.galleryElem.insertAdjacentHTML("beforeend", markup)

   if (!simpleLightbox) {
     simpleLightbox = new SimpleLightbox('.gallery a', {
       captionsData: 'alt',
       captionDelay: 250,
     });
   } else {
     simpleLightbox.refresh();
   }
}
export function clearGallery(){
  refs.galleryElem.innerHTML = "";
}
export function showLoader(){
  refs.loaderJs.classList.add("loader");
}
export function hideLoader() {
  refs.loaderJs.classList.remove('loader');
}
export function showLoadMoreButton(){
  refs.loadMore.classList.add("show");
}
export function hideLoadMoreButton() {
refs.loadMore.classList.remove('show');
}
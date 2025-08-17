import{a as E,S as v,i}from"./assets/vendor-DDdXnYQq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let y=15;async function f(s,r){const t="https://pixabay.com",n="/api/",e=new URLSearchParams({q:s,key:"51658185-19ae36e73b0aa030a4154053e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:y}),o=`${t}${n}?${e}`;try{const{data:l}=await E.get(o);return l}catch(l){return l}}let m;function w(s){const r=s.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
        width="360" height="152"
      />  </a>
      <ul class="gallery-list">
      <li class="gallery-item-desc"><p  class="gallery-descr">Likes</p>
      <p  class="gallery-count">${t.likes}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Views</p>
      <p class="gallery-count">${t.views}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Comments</p>
      <p class="gallery-count">${t.comments}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Downloads</p>
      <p class="gallery-count">${t.downloads}</p>
      </li>
      </ul>
    </li>`).join("");a.galleryElem.insertAdjacentHTML("beforeend",r),m?m.refresh():m=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function M(){a.galleryElem.innerHTML=""}function L(){a.loaderJs.classList.add("loader")}function h(){a.loaderJs.classList.remove("loader")}function b(){a.loadMore.classList.add("show")}function p(){a.loadMore.classList.remove("show")}const a={galleryElem:document.querySelector(".gallery"),loaderJs:document.querySelector(".loader-js"),formEl:document.querySelector(".form"),loadMore:document.querySelector(".loadMore")};let c=1,d="",g=0,u=0;a.formEl.addEventListener("submit",async s=>{if(s.preventDefault(),d=s.target.elements["search-text"].value.trim(),M(),p(),c=1,L(),!d){i.warning({message:"Please enter a search query!",position:"topRight"}),h();return}try{const r=await f(d,c);if(u=r.totalHits,g=Math.ceil(u/y),!r.hits.length){i.error({message:"Sorry, there are no images matching your search query.",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"}),p();return}w(r.hits),g>c&&b()}catch(r){i.error({message:`Error: ${r}`,position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}h(),s.target.reset()});a.loadMore.addEventListener("click",async()=>{p(),L(),c+=1;try{const s=await f(d,c);if(u=s.totalHits,g=Math.ceil(u/y),!s.hits.length){i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}w(s.hits);const r=document.querySelectorAll(".gallery-item"),t=r[r.length-1];t&&window.scrollBy({top:t.getBoundingClientRect().height*2,behavior:"smooth"}),g>c?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Download error",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}h()});
//# sourceMappingURL=index.js.map

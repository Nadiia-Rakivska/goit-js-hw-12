import{a as E,S as M,i as n}from"./assets/vendor-DDdXnYQq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();let p=15;async function f(o,e){const l="https://pixabay.com",i="/api/",r=new URLSearchParams({q:o,key:"51658185-19ae36e73b0aa030a4154053e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:p}),t=`${l}${i}?${r}`;try{const{data:a}=await E.get(t);return a}catch(a){return a}}let h;function w(o){const e=o.map(l=>`<li class="gallery-item">
    <a class="gallery-link" href="${l.largeImageURL}">
      <img
        class="gallery-image"
        src="${l.webformatURL}"
        alt="${l.tags}"
        width="360" height="152"
      />  </a>
      <ul class="gallery-list">
      <li class="gallery-item-desc"><p  class="gallery-descr">Likes</p>
      <p  class="gallery-count">${l.likes}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Views</p>
      <p class="gallery-count">${l.views}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Comments</p>
      <p class="gallery-count">${l.comments}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Downloads</p>
      <p class="gallery-count">${l.downloads}</p>
      </li>
      </ul>
    </li>`).join("");s.galleryElem.insertAdjacentHTML("beforeend",e),h?h.refresh():h=new M(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){s.galleryElem.innerHTML=""}function L(){s.loaderJs.classList.add("loader")}function y(){s.loaderJs.classList.remove("loader")}function b(){s.loadMore.classList.add("show")}function g(){s.loadMore.classList.remove("show")}const s={galleryElem:document.querySelector(".gallery"),loaderJs:document.querySelector(".loader-js"),formEl:document.querySelector(".form"),loadMore:document.querySelector(".loadMore")};let c=1,d="",u=0,m=0;s.formEl.addEventListener("submit",async o=>{if(o.preventDefault(),d=o.target.elements["search-text"].value.trim(),d.length===0){n.warning({message:"Please enter a search query!",position:"topRight"});return}c=1,L(),v(),g();try{const e=await f(d,c);m=e.totalHits,u=Math.ceil(m/p),e.hits.length>0?(w(e.hits),e.hits.length>0&&u>c&&b()):(n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"}),g())}catch(e){n.error({message:`Error: ${e}`,position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}o.target.reset(),y()});s.loadMore.addEventListener("click",async()=>{g(),L(),c+=1;try{const o=await f(d,c);if(m=o.totalHits,u=Math.ceil(m/p),o.hits.length>0){if(w(o.hits),c>=u){y(),g(),n.info({message:"We're sorry, but you've reached the end of search results."});return}else b();const e=document.querySelectorAll(".gallery-item");let i=e[e.length-1].getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"})}}catch{n.error({message:"Download error",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}y()});
//# sourceMappingURL=index.js.map

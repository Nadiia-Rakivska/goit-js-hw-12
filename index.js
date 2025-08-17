import{a as E,S,i as u}from"./assets/vendor-DDdXnYQq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let p=15;async function f(o,a){const r="https://pixabay.com",c="/api/",e=new URLSearchParams({q:o,key:"51658185-19ae36e73b0aa030a4154053e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:p}),t=`${r}${c}?${e}`;try{const{data:s}=await E.get(t);return s}catch(s){return s}}let d;function v(o){const a=o.map(r=>`<li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
        width="360" height="152"
      />  </a>
      <ul class="gallery-list">
      <li class="gallery-item-desc"><p  class="gallery-descr">Likes</p>
      <p  class="gallery-count">${r.likes}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Views</p>
      <p class="gallery-count">${r.views}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Comments</p>
      <p class="gallery-count">${r.comments}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Downloads</p>
      <p class="gallery-count">${r.downloads}</p>
      </li>
      </ul>
    </li>`).join("");l.galleryElem.insertAdjacentHTML("beforeend",a),d?d.refresh():d=new S(".gallery a",{captionsData:"alt",captionDelay:250})}function M(){l.galleryElem.innerHTML=""}function h(){l.loaderJs.classList.add("loader")}function L(){l.loaderJs.classList.remove("loader")}function w(){l.loadMore.classList.add("show")}function g(){l.loadMore.classList.remove("show")}const l={galleryElem:document.querySelector(".gallery"),loaderJs:document.querySelector(".loader-js"),formEl:document.querySelector(".form"),loadMore:document.querySelector(".loadMore")};let i=1,n="",m=0,y=0;l.formEl.addEventListener("submit",async o=>{if(o.preventDefault(),n=o.target.elements["search-text"].value.trim(),M(),g(),i=1,h(),n.length!==0){const a=await f(n,i);y=a.totalHits,m=Math.ceil(y/p),b(a.hits)}m>i&&w(),L(),o.target.reset()});l.loadMore.addEventListener("click",async o=>{h(),i+=1,g();const a=await f(n,i);b(a.hits),m<=i?(g(),u.info({message:"We're sorry, but you've reached the end of search results."})):w(),L();const r=document.querySelectorAll(".gallery-item");let e=r[r.length-1].getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})});function b(o){try{o.length>0?v(o):u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}catch{u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}}
//# sourceMappingURL=index.js.map

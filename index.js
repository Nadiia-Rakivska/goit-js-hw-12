import{S as h,a as L,i as u}from"./assets/vendor-5YrzWRhu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let d;function w(o){const a=o.map(r=>`<li class="gallery-item">
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
    </li>`).join("");l.galleryElem.insertAdjacentHTML("beforeend",a),d?d.refresh():d=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){l.galleryElem.innerHTML=""}function E(){l.loaderJs.classList.add("loader")}function S(){l.loaderJs.classList.remove("loader")}function v(){l.loadMore.classList.add("show")}function M(){l.loadMore.classList.remove("show")}let m,y=15;async function p(o,a){const r="https://pixabay.com",c="/api/",e=new URLSearchParams({q:o,key:"51658185-19ae36e73b0aa030a4154053e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:y}),t=`${r}${c}?${e}`;return L.get(t).then(s=>(m=s.data.total,s.data.hits))}const l={galleryElem:document.querySelector(".gallery"),loaderJs:document.querySelector(".loader-js"),formEl:document.querySelector(".form"),loadMore:document.querySelector(".loadMore")};let i=1,n="",g=0;l.formEl.addEventListener("submit",async o=>{if(o.preventDefault(),n=o.target.elements["search-text"].value.trim(),b(),i=1,n.length!==0){E();const a=await p(n,i);g=Math.ceil(m/y),f(a),S()}g>i&&v(),o.target.reset()});l.loadMore.addEventListener("click",async o=>{i+=1;const a=await p(n,i);f(a),g<=i&&(M(),u.info({message:"We're sorry, but you've reached the end of search results."}));const r=document.querySelectorAll(".gallery-item");let e=r[r.length-1].getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})});function f(o){try{o.length>0?w(o):u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}catch{u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}}
//# sourceMappingURL=index.js.map

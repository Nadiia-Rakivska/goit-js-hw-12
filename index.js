import{a as E,S as v,i as d}from"./assets/vendor-DDdXnYQq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let h=15;async function p(l,r){const t="https://pixabay.com",i="/api/",e=new URLSearchParams({q:l,key:"51658185-19ae36e73b0aa030a4154053e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:h}),o=`${t}${i}?${e}`;try{const{data:a}=await E.get(o);return a}catch(a){return a}}let g;function f(l){const r=l.map(t=>`<li class="gallery-item">
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
    </li>`).join("");s.galleryElem.insertAdjacentHTML("beforeend",r),g?g.refresh():g=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function C(){s.galleryElem.innerHTML=""}function w(){s.loaderJs.classList.add("loader")}function L(){s.loaderJs.classList.remove("loader")}function b(){s.loadMore.classList.add("show")}function u(){s.loadMore.classList.remove("show")}const s={galleryElem:document.querySelector(".gallery"),loaderJs:document.querySelector(".loader-js"),formEl:document.querySelector(".form"),loadMore:document.querySelector(".loadMore")};let c=1,n="",m=0,y=0;s.formEl.addEventListener("submit",async l=>{if(l.preventDefault(),n=l.target.elements["search-text"].value.trim(),C(),u(),c=1,w(),n.length!==0){const r=await p(n,c);try{y=r.totalHits,m=Math.ceil(y/h),r.hits.length>0?f(r.hits):d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}catch(t){d.error({message:`Error: ${t}`,position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}}m>c&&b(),L(),l.target.reset()});s.loadMore.addEventListener("click",async()=>{u(),w(),c+=1;const l=await p(n,c);try{l.hits.length>0&&f(l.hits)}catch{d.error({message:"Download error",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}m<=c?(u(),d.info({message:"We're sorry, but you've reached the end of search results."})):(L(),b());const r=document.querySelectorAll(".gallery-item");let i=r[r.length-1].getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map

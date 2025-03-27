import{S as f,a as u,i as n}from"./assets/vendor-CkdzJWux.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=({largeImageURL:l,webformatURL:t,tags:a,likes:o,views:e,comments:r,downloads:i})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${l}">
        <img class="gallery-image" src="${t}" alt="${a}">
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${o}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Views</p>
            <p class="gallery-info-value">${e}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Comments</p>
            <p class="gallery-info-value">${r}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Downloads</p>
            <p class="gallery-info-value">${i}</p>
          </li>
        </ul>
        </a>
      </div>
    `,y=new f(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});u.defaults.baseURL="https://pixabay.com";const m=l=>{const t={q:l,key:"49370474-a1716903616cca1a00d36cfab",image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get("/api/",{params:t})},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};s.loader.style.display="none";function g(){s.loader.style.display="block"}function c(){s.loader.style.display="none"}const d=l=>{l.preventDefault(),g();const t=l.currentTarget.elements.search_text.value.trim();if(t===""){n.error({title:"Error",message:"Input cannot be empty!",color:"#ff0000"}),c();return}m(t).then(({data:a})=>{if(a.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.searchForm.reset(),s.gallery.innerHTML="";return}const o=a.hits.map(e=>p(e)).join("");s.gallery.innerHTML=o,y.refresh()}).catch(a=>{n.error({title:"Error",message:error.message})}).finally(()=>{c()})};s.searchForm.addEventListener("submit",d);
//# sourceMappingURL=index.js.map

import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){return o.map(({webformatURL:n,largeImageURL:s,tags:r,likes:e,views:t,comments:i,downloads:c})=>`<div class="gallery_item">
            <a class="gallery_link" href="${s}">
                <img class="gallery_image" src="${n}" alt="${r}" />
            </a>
            <div class="info">
                <p>Likes <span>${e}</span></p>
                <p>Views <span>${t}</span></p>
                <p>Comments <span>${i}</span></p>
                <p>Downloads <span>${c}</span></p>
            </div>
        </div>`).join("")}function f(o){const r=`https://pixabay.com/api/?key=49442933-c5db9ffac96cc4cef7ce5cd82&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r,{method:"GET"}).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const a={searchForm:document.querySelector(".js-search-from"),gallery:document.querySelector(".gallery"),notFoundText:document.querySelector(".js-not-found-text")};a.searchForm.addEventListener("submit",function(o){o.preventDefault();const s=o.currentTarget.elements.query.value.trim();f(s).then(r=>{if(!r.total){a.gallery.innerHTML="",l.error({message:`No results for query <span>${s}</span>`,position:"topRight"});return}a.gallery.innerHTML=p(r.hits),new u(".gallery_link")}).catch(r=>console.log(r))});
//# sourceMappingURL=index.js.map
